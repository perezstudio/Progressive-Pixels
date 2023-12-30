<script>
    /** @type {string} */
     export let title
    /** @type {string} */
     export let description
    /** @type {string} */
     export let image
    /** @type {string} */
     export let imageAlt
</script>
<div class="flex flex-col content-center p-8">
    <img src="{image}" alt="{imageAlt}" class="h-20"/>
    <h3 class="text-slate-950 text-4xl font-bold text-center">{title}</h3>
    <p class="text-slate-950 font-medium text-center">{description}</p>
</div>