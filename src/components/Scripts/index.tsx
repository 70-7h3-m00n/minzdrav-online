import React, { Fragment } from 'react'
import Script from 'next/script'
import prod from '@/src/config/prod'

interface ScriptsProps {
    dataScript?: Array<{ item: string }> | null | undefined
}

const Scripts = ({ dataScript }: ScriptsProps): JSX.Element => {
    return (
        <>
            {dataScript?.map((script, index) => (
                <Fragment key={index}>{script.item}</Fragment>
            ))}

            {prod && (
                <>
                    <Script
                        id={'roistat'}
                        dangerouslySetInnerHTML={{
                            __html: `
                    (function(w, d, s, h, id) {
                        w.roistatProjectId = id; w.roistatHost = h;
                        var p = d.location.protocol == "https:" ? "https://" : "http://";
                        var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
                        var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
                    })(window, document, 'script', 'cloud.roistat.com', '5cfe377c158202483a51ae27717c4045');
                `,
                        }}
                    />

                    <Script
                        id='yandex-metrika'
                        type='text/javascript'
                        dangerouslySetInnerHTML={{
                            __html: `
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
                    ym(87585725, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true,
                    ecommerce:"dataLayer"
                  });
                  `,
                        }}
                    />

                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `
                      <div><img src="https://mc.yandex.ru/watch/87585725"
                        style="position:absolute; left:-9999px;" alt="" />
                      </div>`,
                        }}
                    />
                </>
            )}
        </>
    )
}

export default Scripts
