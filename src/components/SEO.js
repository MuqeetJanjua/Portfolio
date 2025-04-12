import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const title = "Muqeet Ahmad | Full Stack Developer & Founder of 4M Digi Tech";
  const description = "Full Stack Developer and Founder of 4M Digi Tech, specializing in Django, Ruby on Rails, and React development. Building exceptional digital experiences with modern technologies.";
  const keywords = "Full Stack Developer, Django, Ruby on Rails, React, Web Development, Python, JavaScript, Portfolio, 4M Digi Tech, Founder";
  const siteUrl = "https://muqeetahmad.com";
  const imageUrl = `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Muqeet Ahmad" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
      
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#3b82f6" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#3b82f6" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Muqeet Ahmad",
          "url": siteUrl,
          "sameAs": [
            "https://github.com/MuqeetJanjua",
            "https://linkedin.com/in/muqeet-ahmad-523650214/"
          ],
          "jobTitle": "Full Stack Developer & Founder",
          "worksFor": {
            "@type": "Organization",
            "name": "4M Digi Tech",
            "url": "https://4mdigitech.com"
          },
          "description": description,
          "additionalType": "https://schema.org/Founder"
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 