/**
 * name: website
 * version: v0.0.0
 * description: Provides the ability to quickly create preset projects.
 * author: chengpeiquan
 * homepage: https://preset.js.org/
 */
import{_ as t,c as e,o as a,U as s}from"./chunks/framework.6508935e.js";const y=JSON.parse('{"title":"Starter Template","description":"","frontmatter":{},"headers":[],"relativePath":"docs/starter-template.md","filePath":"docs/starter-template.md"}'),o={name:"docs/starter-template.md"},l=s(`<h1 id="starter-template" tabindex="-1">Starter Template <a class="header-anchor" href="#starter-template" aria-label="Permalink to &quot;Starter Template {#starter-template}&quot;">​</a></h1><p>Templates created through the Preset CLI are obtained through the Git repository.</p><h2 id="about-classification-of-sources" tabindex="-1">About classification of sources <a class="header-anchor" href="#about-classification-of-sources" aria-label="Permalink to &quot;About classification of sources {#about-classification-of-sources}&quot;">​</a></h2><p>Templates are classified into three sources: official maintenance, open source community, and local configuration.</p><table><thead><tr><th style="text-align:center;">Source</th><th style="text-align:left;">Description</th><th style="text-align:center;">Color</th><th style="text-align:center;">View</th></tr></thead><tbody><tr><td style="text-align:center;">Official Maintenance</td><td style="text-align:left;">Maintained by the official Awesome Starter team.</td><td style="text-align:center;">Yellow</td><td style="text-align:center;"><a href="https://github.com/awesome-starter/website/blob/main/docs/public/config/official.json" target="_blank" rel="noreferrer">official.json</a></td></tr><tr><td style="text-align:center;">Open Source Community</td><td style="text-align:left;">Excellent templates found from open source communities like GitHub.</td><td style="text-align:center;">White</td><td style="text-align:center;"><a href="https://github.com/awesome-starter/website/blob/main/docs/public/config/community.json" target="_blank" rel="noreferrer">community.json</a></td></tr><tr><td style="text-align:center;">Local Configuration</td><td style="text-align:left;">A config file that you store locally on your computer.</td><td style="text-align:center;">Cyan</td><td style="text-align:center;"><a href="./local-configuration">Local Configuration</a></td></tr></tbody></table><h2 id="rules-for-adding-templates" tabindex="-1">Rules for adding templates <a class="header-anchor" href="#rules-for-adding-templates" aria-label="Permalink to &quot;Rules for adding templates {#rules-for-adding-templates}&quot;">​</a></h2><p>The configuration file is in JSON format, so please follow the correct JSON syntax and add it to the array in the template file.</p><p>Each template currently specifies the following format:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">tech</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue3-ts-vite</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">desc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">A template for Vue 3.0 with TypeScript, base on Vite.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">repo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://github.com/awesome-starter/vue3-ts-vite-starter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>JSON field description:</p><table><thead><tr><th style="text-align:center;">Field</th><th style="text-align:center;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">tech</td><td style="text-align:center;">string</td><td style="text-align:left;">Technology stack, please check <a href="https://github.com/awesome-starter/website/blob/main/docs/public/config/tech.json" target="_blank" rel="noreferrer">here</a> for legal tech stack names.</td></tr><tr><td style="text-align:center;">name</td><td style="text-align:center;">string</td><td style="text-align:left;">Name of the template, please omit words like <code>template</code> or <code>starter</code>, just write the base name.</td></tr><tr><td style="text-align:center;">desc</td><td style="text-align:center;">string</td><td style="text-align:left;">Description of the template, one sentence to understand the characteristics of this template.</td></tr><tr><td style="text-align:center;">repo</td><td style="text-align:center;">string</td><td style="text-align:left;">Template repository URL, supports <code>https</code> and <code>git@</code> starting addresses, see the following <a href="#template-url-description">Template URL description</a></td></tr><tr><td style="text-align:center;">mirror</td><td style="text-align:center;">string</td><td style="text-align:left;">Optional, the URL of the mirror warehouse, fill in the same format as the <code>repo</code> field, see the description of <a href="./proxy-download">Proxy Download</a> for usage</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Since the purpose of Awesome Starter is to provide excellent project templates, it only accepts repository collections of the Starter Template class. If you plan to make PR contributions to <a href="https://github.com/awesome-starter/website/blob/main/docs/public/config/community.json" target="_blank" rel="noreferrer">community.json</a>, please pay attention to this.</p><p>For the beauty of the list, currently the template name can display up to 20 characters, and the template description can display up to 80 characters. Exceeding the number of characters will end with <code>…</code> ellipsis.</p></div><h2 id="template-url-description" tabindex="-1">Template URL description <a class="header-anchor" href="#template-url-description" aria-label="Permalink to &quot;Template URL description {#template-url-description}&quot;">​</a></h2><p>Template URLs are supported in two formats: <a href="#https">HTTPS</a> and <a href="#ssh">SSH</a>.</p><h3 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-label="Permalink to &quot;HTTPS {#https}&quot;">​</a></h3><p>By default, HTTPS is used to configure for public repositories:</p><ul><li>If you use the <code>master</code> branch, just copy the access address of the repository in the browser directly</li><li>If it is a non-<code>master</code> branch such as <code>main</code> or <code>develop</code>, you need to concatenate <code>#</code> + branch name</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Use \`master\` as the master branch</span></span>
<span class="line"><span style="color:#FFCB6B;">https://github.com/awesome-starter/vue3-ts-vite-starter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Use \`main\` or other non-master branches</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># (the difference is the # sign with branch name at the end)</span></span>
<span class="line"><span style="color:#FFCB6B;">https://github.com/awesome-starter/vue3-ts-vite-starter#main</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>So, both the official template and the community template need to be configured this way, since they both have to be public repositories.</p></div><h3 id="ssh" tabindex="-1">SSH <a class="header-anchor" href="#ssh" aria-label="Permalink to &quot;SSH {#ssh}&quot;">​</a></h3><p>If you configure your SSH Key correctly, you can download the template via SSH, which will pull the code in the form of <code>git clone</code>.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Copy the SSH download URL in the repository</span></span>
<span class="line"><span style="color:#FFCB6B;">git@github.com:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">awesome-starter/create-preset.git</span></span></code></pre></div><p>You can visit <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh" target="_blank" rel="noreferrer">Connecting to GitHub with SSH</a> to learn how to configure SSH Key.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The provision of this method is mainly used to manage private repositories in the local configuration.</p></div><h2 id="sort-priority" tabindex="-1">Sort priority <a class="header-anchor" href="#sort-priority" aria-label="Permalink to &quot;Sort priority {#sort-priority}&quot;">​</a></h2><p>Currently, it will be sorted according to the priority of &quot;Local Configuration&quot; &gt; &quot;Official Maintenance&quot; &gt; &quot;Open Source Community&quot;, and &quot;Local Configuration&quot; will be placed at the top of the list, which is convenient for your daily use.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Since <code>v0.10.0</code>, the order of community templates is no longer fixed, and the order will be randomly generated each time, in order to allow different templates to have enough opportunities to be exposed at the top.</p><p>If there are some community templates that you commonly use, please add them to the local configuration for easy search, so that they can be fixed at the top of the list.</p></div><h2 id="manage-local-templates" tabindex="-1">Manage local templates <a class="header-anchor" href="#manage-local-templates" aria-label="Permalink to &quot;Manage local templates {#manage-local-templates}&quot;">​</a></h2><p>See: <a href="./local-configuration">Manage local templates in your local configuration</a> .</p>`,29),n=[l];function r(i,c,p,d,h,u){return a(),e("div",null,n)}const f=t(o,[["render",r]]);export{y as __pageData,f as default};
