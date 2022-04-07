/*!
 * PSPDFKit for Web 2022.2.1 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2022 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
"use strict";(globalThis.webpackChunkPSPDFKit=globalThis.webpackChunkPSPDFKit||[]).push([[3610],{66142:(e,t,a)=>{a.r(t),a.d(t,{corePool:()=>r.m,validateStandaloneConfiguration:()=>r.MO,normalizeCoreOptions:()=>r.oc,default:()=>p,customFontsPromiseRef:()=>f,loadModule:()=>g});var s=a(14968),n=a(35369),i=a(70545),r=a(27297),o=a(95453),l=a(80614),c=a(96233),u=a(5164),d=a(49029),m=a(33502);let h;class p extends r.ZP{constructor(e){const t=e.baseUrl||(0,s.SV)(window.document),a={...e,baseUrl:t};if("string"!=typeof a.baseUrl)throw new i.p2("`baseUrl` is mandatory and must be a valid URL, e.g. `https://example.com/`");if("string"!=typeof a.document&&!(a.document instanceof ArrayBuffer))throw new i.p2("document must be either an URL to a supported document type (PDF and images), e.g. `https://example.com/document.pdf`, or an `ArrayBuffer`");if(h&&h!==a.licenseKey)throw new i.p2("Trying to re-use PSPDFKit for Web with a different licenseKey than the previous one.\nUnfortunately we only allow one licenseKey per instance.\nPlease contact support for further assistance.");if("string"==typeof a.licenseKey&&a.licenseKey.startsWith("TRIAL-"))throw new i.p2("You're using the npm key instead of the license key. This key is used to download the PSPDFKit for Web package via the node package manager.\n\nLeave out the license key to activate as a trial.");super(a),this.destroyed=!1}async load(){let e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.progressCallback&&t.progressCallback("loading",.2),e="string"==typeof this._state.document?fetch(this._state.document,{credentials:"same-origin"}).then((e=>e.arrayBuffer())).finally((()=>{t.progressCallback&&t.progressCallback("loading",.5)})):this._state.document;const a=await g(this.client,this._state).finally((()=>{t.progressCallback&&t.progressCallback("loading",.8)}));(0,i.kG)(a);const{features:s,signatureFeatureAvailability:r}=a,o=r===d.H.ELECTRONIC_SIGNATURES&&s.includes(m.sw.WEB_ANNOTATION_EDITING)&&this._state.forceLegacySignaturesFeature?d.H.LEGACY_SIGNATURES:r;this._state=this._state.set("features",(0,n.aV)(s)).set("signatureFeatureAvailability",o),h=this._state.licenseKey;const p=await e;let f;try{f=this.destroyed?await new Promise((()=>{})):await this.client.openDocument(p,t.password)}catch(e){throw"INVALID_PASSWORD"===e.message&&this._state.document instanceof ArrayBuffer&&(this._state=this._state.set("document",e.callArgs[0])),"IMAGE_DOCUMENTS_NOT_LICENSED"===e.message&&(e.message="The image documents feature is not enabled for your license key. Please contact support or sales to purchase the UI module for PSPDFKit for Web."),e}this._XFDF&&await this.client.importXFDF(this._XFDF.source,this._XFDF.keepCurrentAnnotations);let y=[];if(l.Ei.PDF_JAVASCRIPT){const e=await this.client.enablePDFJavaScriptSupport(),t=await this.client.runPDFFormattingScripts();y=(0,u.gE)(e,t)}if(this._instantJSON&&this._instantJSON.pdfId&&f.ID.permanent){const e=this._instantJSON.pdfId,t=f.ID;if(e.permanent!==t.permanent)throw new i.p2("Could not instantiate from Instant JSON: Permanent PDF ID mismatch.\nPlease use the same PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/");if(e.changing!==t.changing)throw new i.p2("Could not instantiate from Instant JSON: Changing PDF ID mismatch.\nPlease use the same revision of this PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/")}if(this._trustedCAsCallback)try{const e=await this._trustedCAsCallback();if(!Array.isArray(e))throw new i.p2("Certificates response must be an array");if(e.some((e=>!(e instanceof ArrayBuffer)&&"string"!=typeof e)))throw new i.p2("All certificates must be passed as ArrayBuffer (DER) or string (PEM)");await this.client.loadCertificates(e.map(c.uF))}catch(e){throw new i.p2(`Could not retrieve certificates for digital signatures validation: ${e.message}.`)}return this._state=this._state.set("documentResponse",f),{features:this._state.features,signatureFeatureAvailability:this._state.signatureFeatureAvailability,hasPassword:!!t.password,allowedTileScales:"all",jsActionChanges:y}}destroy(){this.destroyed=!0,super.destroy()}}const f={current:void 0};function g(e,t){var a;f.current=f.current||(t.customFonts?(a=t.customFonts,Promise.all(a.map((e=>new Promise((t=>{var a;(0,i.kG)(e.name),null==e||null===(a=e.callback)||void 0===a||a.call(e,e.name).then((a=>{(0,i.kG)(e.name),a instanceof Blob?t({name:e.name,data:a}):((0,i.vU)(`Callback for retrieving font ${e.name} didn't returned a Blob. It returned ${typeof a}`),t())})).catch((a=>{(0,i.vU)(`Error returned by callback for retrieving font ${e.name}. ${a}`),t()}))}))))).then((e=>e.filter(Boolean)))):void 0);const s=t.electronAppName||(0,o.$u)()||window.location.origin;return e.loadNativeModule(t.baseUrl,{mainThreadOrigin:s,disableWebAssembly:t.disableWebAssembly,disableWebAssemblyStreaming:t.disableWebAssemblyStreaming,enableAutomaticLinkExtraction:t.enableAutomaticLinkExtraction,overrideMemoryLimit:t.overrideMemoryLimit}).then((async()=>f.current?e.load(t.baseUrl,t.licenseKey,{mainThreadOrigin:s,customFonts:await f.current}):e.load(t.baseUrl,t.licenseKey,{mainThreadOrigin:s})))}}}]);