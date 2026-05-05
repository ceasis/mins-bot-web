// Shared design switcher. Mounts a <select> into [data-design-switcher].
// Docs lives at / (the homepage); Terminal lives under /designs/.
(function () {
    const DESIGNS = [
        { slug: '35-docs',       href: '/',                            label: '35 — Docs / manual' },
        { slug: '02-terminal',   href: '/designs/02-terminal.html',    label: '02 — Terminal / CLI' },
    ];

    const mounts = document.querySelectorAll('[data-design-switcher]');
    if (!mounts.length) return;

    // Figure out which design is active. Homepage ("/" or "/index.html") = 35-docs.
    const path = location.pathname.replace(/\\/g, '/');
    let current = '35-docs';
    if (path === '/' || /\/index\.html?$/.test(path)) {
        current = '35-docs';
    } else {
        const match = path.match(/([^/]+)\.html?$/);
        if (match) current = match[1];
    }

    mounts.forEach((mount) => {
        const selectClass = mount.dataset.selectClass || '';
        const select = document.createElement('select');
        select.setAttribute('aria-label', 'Switch design');
        select.className = selectClass;

        DESIGNS.forEach((d) => {
            const opt = document.createElement('option');
            opt.value = d.href;
            opt.textContent = d.label;
            if (d.slug === current) opt.selected = true;
            select.appendChild(opt);
        });

        select.addEventListener('change', () => {
            window.location.href = select.value;
        });

        mount.appendChild(select);
    });
})();
