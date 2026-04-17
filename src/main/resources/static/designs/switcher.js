// Shared design switcher. Mounts a <select> into [data-design-switcher].
// 01 Swiss lives at / (the homepage); everything else lives under /designs/.
(function () {
    const DESIGNS = [
        { slug: '01-swiss',      href: '/',                            label: '01 — Swiss / technical' },
        { slug: '02-terminal',   href: '/designs/02-terminal.html',    label: '02 — Terminal / CLI' },
        { slug: '03-brutalist',  href: '/designs/03-brutalist.html',   label: '03 — Brutalist' },
        { slug: '04-editorial',  href: '/designs/04-editorial.html',   label: '04 — Editorial magazine' },
        { slug: '05-blueprint',  href: '/designs/05-blueprint.html',   label: '05 — Blueprint / schematic' },
        { slug: '06-botanical',  href: '/designs/06-botanical.html',   label: '06 — Botanical / earth' },
        { slug: '07-minimal',    href: '/designs/07-minimal.html',     label: '07 — Japanese minimal' },
        { slug: '08-bauhaus',    href: '/designs/08-bauhaus.html',     label: '08 — Bauhaus geometric' },
        { slug: '09-vaporwave',  href: '/designs/09-vaporwave.html',   label: '09 — Vaporwave' },
        { slug: '10-gallery',    href: '/designs/10-gallery.html',     label: '10 — Gallery / cinematic' },
        { slug: '11-artdeco',    href: '/designs/11-artdeco.html',     label: '11 — Art Deco' },
        { slug: '12-memphis',    href: '/designs/12-memphis.html',     label: '12 — Memphis 80s' },
        { slug: '13-notebook',   href: '/designs/13-notebook.html',    label: '13 — Hand-drawn notebook' },
        { slug: '14-swatch',     href: '/designs/14-swatch.html',      label: '14 — Color swatch' },
        { slug: '15-nordic',     href: '/designs/15-nordic.html',      label: '15 — Nordic / hygge' },
        { slug: '16-glass',      href: '/designs/16-glass.html',       label: '16 — Glassmorphism' },
        { slug: '17-transit',    href: '/designs/17-transit.html',     label: '17 — Transit / subway' },
        { slug: '18-receipt',    href: '/designs/18-receipt.html',     label: '18 — Receipt / thermal' },
        { slug: '19-zine',       href: '/designs/19-zine.html',        label: '19 — Zine / punk collage' },
        { slug: '20-wes',        href: '/designs/20-wes.html',         label: '20 — Wes Anderson' },
        { slug: '21-racing',     href: '/designs/21-racing.html',      label: '21 — Racing / motorsport' },
        { slug: '22-typewriter', href: '/designs/22-typewriter.html',  label: '22 — Typewriter manuscript' },
        { slug: '23-airmail',    href: '/designs/23-airmail.html',     label: '23 — Airmail envelope' },
        { slug: '24-wireframe',  href: '/designs/24-wireframe.html',   label: '24 — Wireframe / mockup' },
        { slug: '25-y2k',        href: '/designs/25-y2k.html',         label: '25 — Y2K neo-brutalism' },
        { slug: '26-cassette',   href: '/designs/26-cassette.html',    label: '26 — Cassette tape' },
        { slug: '27-comic',      href: '/designs/27-comic.html',       label: '27 — Comic / pop art' },
        { slug: '28-herbarium',  href: '/designs/28-herbarium.html',   label: '28 — Herbarium specimen' },
        { slug: '29-arcade',     href: '/designs/29-arcade.html',      label: '29 — 8-bit arcade' },
        { slug: '30-vogue',      href: '/designs/30-vogue.html',       label: '30 — Vogue editorial' },
        { slug: '31-report',     href: '/designs/31-report.html',      label: '31 — Annual report' },
        { slug: '32-noir',       href: '/designs/32-noir.html',        label: '32 — Film noir' },
        { slug: '33-riso',       href: '/designs/33-riso.html',        label: '33 — Risograph print' },
        { slug: '34-nasa',       href: '/designs/34-nasa.html',        label: '34 — NASA mission' },
        { slug: '35-docs',       href: '/designs/35-docs.html',        label: '35 — Docs / manual' },
    ];

    const mounts = document.querySelectorAll('[data-design-switcher]');
    if (!mounts.length) return;

    // Figure out which design is active. Homepage ("/" or "/index.html") = 01-swiss.
    const path = location.pathname.replace(/\\/g, '/');
    let current = '01-swiss';
    if (path === '/' || /\/index\.html?$/.test(path)) {
        current = '01-swiss';
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
