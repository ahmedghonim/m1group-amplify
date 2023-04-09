import { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export default function Document(ctx: DocumentContext) {
  return (
    <Html dir={ctx.locale === "ar" ? "rtl" : "ltr"} lang={ctx.locale}>
      <Head>
        <title>
          مكتب محاسبة ومراجعة للاستشارات الضريبية والقانونية M1 GROUP
        </title>
        <meta
          name="keywords"
          content="محاسبون قانونيون و مراجعون و خدمات ضرائب, محاسب ضرائب, خبير ضرائب ، تأسيس مؤسسه ، مكتب محاسب قانوني ، فض منازعات, خبير مثمن ، محاسب ضرائب ، مستشار قانوني ، مراجعه حسابات، مقيم عقارات ،مراقب حسابات ، شهاده محاسب قانوني ،مراجع حسابات ، سهاده إدارة محاسب"
        />
        <meta
          name="description"
          content="مكتب محمد رزق و شركاه للمحاسبه القانونيه و الضرائب و كافه المهام الورقيه والاجراءات القانونيه مع المتابعه المستمرة وتخليص الاجراءات الحكوميه لتاسيس شركتك                     ."
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta property="og:locale" content="ar_AR,en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="مكتب محاسبة ومراجعة للاستشارات الضريبية والقانونية M1 GROUP"
        />
        <meta
          property="og:description"
          content="تعتبر مجموعه m1 محمد رزق للمحاسبه القانونيه ، مكنب محاسبهو مراجعه رائد في مجال العمل المحاسبي و الاعمال الضريبيه تمتاز بخبره اكثر من عشره اعوام في مجال المحاسبه و المراجعه."
        />
        <meta property="og:url" content="https://www.msh.com.eg/" />
        <meta
          property="og:site_name"
          content="مكتب محاسبة و ضرائب و تأسيس شركات M1 GROUP"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="مكتب محاسبة ومراجعة M1 GROUP للاستشارات الضريبية والقانونية"
        />
        <meta name="twitter:label1" content="Written by Ahmed Ghonim" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
