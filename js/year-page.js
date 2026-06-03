/* ═══════════════════════════════════════════════════════════════════════
   year-page.js — Individual year publication page renderer
   Reads [data-year] from #year-pub-list and renders all publications
   for that year from data/publications.js (loaded before this script).
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  function typeTag(type, status) {
    if (status === 'under_review') {
      return '<span class="pub-type-tag tag-preprint">Under Review</span>';
    }
    var map = {
      conference: ['tag-conference', 'Conference'],
      workshop:   ['tag-workshop',   'Workshop'],
      journal:    ['tag-journal',    'Journal'],
      challenge:  ['tag-challenge',  'Challenge'],
      preprint:   ['tag-preprint',   'Preprint']
    };
    var info = map[type] || ['tag-preprint', type];
    return '<span class="pub-type-tag ' + info[0] + '">' + info[1] + '</span>';
  }

  function fmtAuthors(str) {
    return str.replace(/Aich U(\.\*?)?/g, '<strong>Aich U$1</strong>');
  }

  function titleTileText(title) {
    var cleaned = (title || '').replace(/[^A-Za-z0-9 ]+/g, ' ').trim();
    if (!cleaned) return 'P';
    var words = cleaned.split(/\s+/).filter(Boolean);
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  }

  function tileClass(pub) {
    if (pub.status === 'under_review') return 'tile-preprint';
    var map = {
      conference: 'tile-conference',
      workshop: 'tile-workshop',
      journal: 'tile-journal',
      challenge: 'tile-challenge',
      preprint: 'tile-preprint'
    };
    return map[pub.type] || 'tile-preprint';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('year-pub-list');
    if (!container || typeof publications === 'undefined') return;

    var year = parseInt(container.getAttribute('data-year'), 10);

    /* Update page title and heading */
    document.title = 'Publications \u2014 ' + year + ' | Utathya Aich';
    var headingEl = document.getElementById('year-page-heading');
    if (headingEl) headingEl.textContent = 'Publications \u2014 ' + year;

    /* Filter and sort: published first, under-review last */
    var pubs = publications
      .filter(function (p) { return p.year === year; })
      .sort(function (a, b) {
        if (a.status === 'under_review' && b.status !== 'under_review') return 1;
        if (b.status === 'under_review' && a.status !== 'under_review') return -1;
        return 0;
      });

    if (!pubs.length) {
      container.innerHTML = '<p style="color:#888;padding:24px 0;">No publications listed for ' + year + '.</p>';
      return;
    }

    container.innerHTML = pubs.map(function (pub) {
      var links = [];
      if (pub.paper)   links.push('<a class="pub-link-btn" href="' + pub.paper   + '" target="_blank" rel="noopener">Paper</a>');
      if (pub.arxiv)   links.push('<a class="pub-link-btn" href="' + pub.arxiv   + '" target="_blank" rel="noopener">arXiv</a>');
      if (pub.code)    links.push('<a class="pub-link-btn" href="' + pub.code    + '" target="_blank" rel="noopener">Code</a>');
      if (pub.project) links.push('<a class="pub-link-btn" href="' + pub.project + '" target="_blank" rel="noopener">Project Page</a>');

      var linksHTML    = links.length ? '<div class="pub-links">' + links.join('') + '</div>' : '';
      var abstractHTML = pub.abstract
        ? '<p class="pub-abstract">' + pub.abstract + '</p>'
        : '';
      var sideHTML = [
        '<div class="pub-side">',
          '<span class="paper-tile ' + tileClass(pub) + '">' + titleTileText(pub.title) + '</span>',
          '<div class="pub-year-label">' + pub.year + '</div>',
        '</div>'
      ].join('');

      return [
        '<div class="pub-item">',
          sideHTML,
          '<div>',
            '<div class="pub-title">' + pub.title + typeTag(pub.type, pub.status) + '</div>',
            '<div class="pub-authors">' + fmtAuthors(pub.authors) + '</div>',
            '<div class="pub-venue">' + pub.venue + ', ' + pub.year + '</div>',
            abstractHTML,
            linksHTML,
          '</div>',
        '</div>'
      ].join('');
    }).join('');
  });

})();
