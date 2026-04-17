// Shared design switcher. Mounts a <select> into [data-design-switcher].
// Reads optional class attrs for styling per design.
(function () {
    const DESIGNS = [
        { slug: '01-swiss',      label: '01 — Swiss / technical' },
        { slug: '02-terminal',   label: '02 — Terminal / CLI' },
        { slug: '03-brutalist',  label: '03 — Brutalist' },
        { slug: '04-editorial',  label: '04 — Editorial magazine' },
        { slug: '05-blueprint',  label: '05 — Blueprint / schematic' },
        { slug: '06-botanical',  label: '06 — Botanical / earth' },
        { slug: '07-minimal',    label: '07 — Japanese minimal' },
        { slug: '08-bauhaus',    label: '08 — Bauhaus geometric' },
        { slug: '09-vaporwave',  label: '09 — Vaporwave' },
        { slug: '10-gallery',    label: '10 — Gallery / cinematic' },
    ];

    const mounts = document.querySelectorAll('[data-design-switcher]');
    if (!mounts.length) return;

    const match = location.pathname.match(/([^/\\]+)\.html?$/);
    const current = match ? match[1] : '';

    mounts.forEach((mount) => {
        const selectClass = mount.dataset.selectClass || '';
        const select = document.createElement('select');
        select.setAttribute('aria-label', 'Switch design');
        select.className = selectClass;

        DESIGNS.forEach((d) => {
            const opt = document.createElement('option');
            opt.value = '/designs/' + d.slug + '.html';
            opt.textContent = d.label;
            if (d.slug === current) opt.selected = true;
            select.appendChild(opt);
        });

        const divider = document.createElement('option');
        divider.disabled = true;
        divider.textContent = '────────';
        select.appendChild(divider);

        const gallery = document.createElement('option');
        gallery.value = '/';
        gallery.textContent = '⇢ Gallery index';
        select.appendChild(gallery);

        select.addEventListener('change', () => {
            window.location.href = select.value;
        });

        mount.appendChild(select);
    });
})();
