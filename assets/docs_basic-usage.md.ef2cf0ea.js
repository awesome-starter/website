/**
 * name: website
 * version: v0.0.0
 * description: Provides the ability to quickly create preset projects.
 * author: chengpeiquan
 * homepage: https://preset.js.org/
 */
import{_ as e,c as a,o as t,U as s}from"./chunks/framework.6508935e.js";const f=JSON.parse('{"title":"Basic Usage","description":"","frontmatter":{},"headers":[],"relativePath":"docs/basic-usage.md","filePath":"docs/basic-usage.md"}'),o={name:"docs/basic-usage.md"},i=s('<h1 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage {#basic-usage}&quot;">​</a></h1><p>Creating templates is the core feature of Preset CLI, which provides a variety of project templates for you to use.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The template list is under continuous improvement.</p></div><h2 id="initialization" tabindex="-1">Initialization <a class="header-anchor" href="#initialization" aria-label="Permalink to &quot;Initialization {#initialization}&quot;">​</a></h2><p>You can create a starter templates to your liking by <code>init</code> (alias <code>i</code>) command.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">preset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><h2 id="specify-a-project-name" tabindex="-1">Specify a project name <a class="header-anchor" href="#specify-a-project-name" aria-label="Permalink to &quot;Specify a project name {#specify-a-project-name}&quot;">​</a></h2><p>You can add a parameter as the project name, then you will skip the problem of entering the project name and choose the technology stack directly:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">preset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello-vue</span></span></code></pre></div><h2 id="specify-a-project-template" tabindex="-1">Specify a project template <a class="header-anchor" href="#specify-a-project-template" aria-label="Permalink to &quot;Specify a project template {#specify-a-project-template}&quot;">​</a></h2><p>You can directly specify a template to create a project with the <code>--template</code> option (requires <code>v0.12.0</code> above):</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># A project called `hello-vue` will be created using the `vue3-ts-vite` template</span></span>\n<span class="line"><span style="color:#FFCB6B;">preset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello-vue</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--template</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue3-ts-vite</span></span></code></pre></div><h2 id="fetch-latest-configuration" tabindex="-1">Fetch latest configuration <a class="header-anchor" href="#fetch-latest-configuration" aria-label="Permalink to &quot;Fetch latest configuration {#fetch-latest-configuration}&quot;">​</a></h2><p>Preset CLI supports getting the latest technology stack list and starter template list without updating the version, because they are obtained through configuration files.</p><p>The configuration files are hosted in <a href="https://github.com/awesome-starter/website/tree/main/docs/public/config" target="_blank" rel="noreferrer">config</a> folder.</p><p>Therefore, after executing the <code>init</code> command, a network request will be initiated to fetch the configuration file.</p>',16),n=[i];function c(l,p,r,h,d,u){return t(),a("div",null,n)}const g=e(o,[["render",c]]);export{f as __pageData,g as default};