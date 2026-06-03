/* ═══════════════════════════════════════════════════════════════════════
   main.js — Utathya Aich Academic Portfolio
   Dynamically renders publications from data/publications.js.
   No external dependencies.
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Render a pub-type tag ─────────────────────────────────────── */
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

  /* ─── Bold "Aich U" in author strings ──────────────────────────── */
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

  /* ─── Build one news-style item HTML string ────────────────────── */
  function newsItemHTML(pub) {
    var links = [];
    if (pub.paper)   links.push('<a class="pub-link-btn" href="' + pub.paper   + '" target="_blank" rel="noopener">Paper</a>');
    if (pub.arxiv)   links.push('<a class="pub-link-btn" href="' + pub.arxiv   + '" target="_blank" rel="noopener">arXiv</a>');
    if (pub.code)    links.push('<a class="pub-link-btn" href="' + pub.code    + '" target="_blank" rel="noopener">Code</a>');
    if (pub.project) links.push('<a class="pub-link-btn" href="' + pub.project + '" target="_blank" rel="noopener">Project Page</a>');

    var linksHTML = links.length
      ? '<div class="pub-links">' + links.join('') + '</div>'
      : '';

    var tileHTML = '<span class="paper-tile ' + tileClass(pub) + '">' + titleTileText(pub.title) + '</span>';

    return [
      '<div class="news-item">',
        '<div class="news-meta">',
          tileHTML,
          '<span class="news-year">' + pub.year + '</span>',
          typeTag(pub.type, pub.status),
        '</div>',
        '<div>',
          '<div class="news-title">' + pub.title + '</div>',
          '<div class="news-authors">' + fmtAuthors(pub.authors) + '</div>',
          '<div class="news-venue">' + pub.venue + '</div>',
          linksHTML,
        '</div>',
      '</div>'
    ].join('');
  }

  /* ─── Build one standard pub-item HTML string ───────────────────── */
  function pubHTML(pub, showYear) {
    var links = [];
    if (pub.paper)   links.push('<a class="pub-link-btn" href="' + pub.paper   + '" target="_blank" rel="noopener">Paper</a>');
    if (pub.arxiv)   links.push('<a class="pub-link-btn" href="' + pub.arxiv   + '" target="_blank" rel="noopener">arXiv</a>');
    if (pub.code)    links.push('<a class="pub-link-btn" href="' + pub.code    + '" target="_blank" rel="noopener">Code</a>');
    if (pub.project) links.push('<a class="pub-link-btn" href="' + pub.project + '" target="_blank" rel="noopener">Project Page</a>');

    var linksHTML = links.length
      ? '<div class="pub-links">' + links.join('') + '</div>'
      : '';

    var sideCell = [
      '<div class="pub-side">',
        '<span class="paper-tile ' + tileClass(pub) + '">' + titleTileText(pub.title) + '</span>',
        '<div class="pub-year-label">' + (showYear ? pub.year : '') + '</div>',
      '</div>'
    ].join('');

    return [
      '<div class="pub-item">',
        sideCell,
        '<div>',
          '<div class="pub-title">' + pub.title + typeTag(pub.type, pub.status) + '</div>',
          '<div class="pub-authors">' + fmtAuthors(pub.authors) + '</div>',
          '<div class="pub-venue">' + pub.venue + ', ' + pub.year + '</div>',
          linksHTML,
        '</div>',
      '</div>'
    ].join('');
  }

  /* ─── Section: News & Updates (featured pubs as scrollable news feed) ── */
  function initFeatured() {
    var container = document.getElementById('featured-pub-list');
    var btn       = document.getElementById('btn-show-more');
    if (!container || typeof publications === 'undefined') return;

    var recentPub = publications
      .filter(function (p) { return p.status === 'published'; })
      .sort(function (a, b) { return b.year - a.year; })
      .slice(0, 5);

    function applyTopThreeHighlight() {
      var items = container.querySelectorAll('.news-item');
      items.forEach(function (item) {
        item.classList.remove('top-highlight-1', 'top-highlight-2', 'top-highlight-3');
      });

      if (items[0]) items[0].classList.add('top-highlight-1');
      if (items[1]) items[1].classList.add('top-highlight-2');
      if (items[2]) items[2].classList.add('top-highlight-3');
    }

    function render(list) {
      container.innerHTML = list.map(function (p) { return newsItemHTML(p); }).join('');
      /* reset scroll to top whenever the list changes */
      container.scrollTop = 0;
      applyTopThreeHighlight();
    }

    render(recentPub);

    if (btn) btn.style.display = 'none';
  }

  /* ─── Section: Publications by Year ────────────────────────────── */
  function initByYear() {
    var tabsEl  = document.getElementById('year-tabs');
    var panesEl = document.getElementById('year-panes');
    if (!tabsEl || !panesEl || typeof publications === 'undefined') return;

    /* Collect unique years, newest first */
    var years = [];
    publications.forEach(function (p) {
      if (years.indexOf(p.year) === -1) years.push(p.year);
    });
    years.sort(function (a, b) { return b - a; });

    var PREVIEW = 3;

    years.forEach(function (year, idx) {
      /* Published papers first, then under-review */
      var yearPubs = publications
        .filter(function (p) { return p.year === year; })
        .sort(function (a, b) {
          if (a.status === 'under_review' && b.status !== 'under_review') return 1;
          if (b.status === 'under_review' && a.status !== 'under_review') return -1;
          return 0;
        });

      var preview = yearPubs.slice(0, PREVIEW);
      var total   = yearPubs.length;

      /* Tab button */
      var btn = document.createElement('button');
      btn.className   = 'year-tab-btn' + (idx === 0 ? ' active' : '');
      btn.textContent = year;
      btn.dataset.year = year;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
      tabsEl.appendChild(btn);

      /* Tab pane */
      var pane = document.createElement('div');
      pane.className   = 'year-tab-pane' + (idx === 0 ? ' active' : '');
      pane.dataset.year = year;
      pane.setAttribute('role', 'tabpanel');

      var previewHTML = preview.map(function (p) { return pubHTML(p, false); }).join('');
      var viewAllHTML = total > PREVIEW
        ? '<div class="view-all-wrap"><a class="btn-view-all" href="publications/' + year + '.html">' +
          'View All ' + year + ' Publications (' + total + ')</a></div>'
        : '';

      pane.innerHTML = '<div class="pub-list">' + previewHTML + '</div>' + viewAllHTML;
      panesEl.appendChild(pane);
    });

    /* Tab-switching handler */
    tabsEl.addEventListener('click', function (e) {
      var clicked = e.target.closest('.year-tab-btn');
      if (!clicked) return;

      tabsEl.querySelectorAll('.year-tab-btn').forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      panesEl.querySelectorAll('.year-tab-pane').forEach(function (p) {
        p.classList.remove('active');
      });

      clicked.classList.add('active');
      clicked.setAttribute('aria-selected', 'true');
      panesEl.querySelector('[data-year="' + clicked.dataset.year + '"]').classList.add('active');
    });
  }

  /* ─── Smooth-scroll for in-page anchor links ────────────────────── */
  function initNavScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id  = this.getAttribute('href').slice(1);
        var target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        var nav = document.querySelector('nav');
        var navOffset = nav ? nav.getBoundingClientRect().height + 10 : 60;
        var top = target.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ─── Init ──────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    initFeatured();
    initByYear();
    initNavScroll();
  });

})();
