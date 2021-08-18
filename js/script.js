// 'use strict';
// document.getElementById('test-button').addEventListener('click', function(){
//     const links = document.querySelectorAll('.titles a');
//     console.log('links:', links);
//   });
{
  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    // console.log('Link was clicked!');

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    // console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    // console.log(articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    // console.log(targetArticle);

    /* [DONE] add class 'active' to the correct article */
    const clickedArticle = document.querySelector(articleSelector);
    clickedArticle.classList.add('active');
  };

  // Generate Title Links

  const optArticleSelector = '.post';
  const optTitleSelector = '.post-title';
  const optTitleListSelector = '.titles';
  const optArticleTagsSelector = '.post-tags .list';

    function generateTitleLinks() {

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    // console.log(titleList);

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);
    for (let article of articles) {

      /* get the article id */
      const articleId = article.getAttribute('id');
      // console.log(articleId);

      /* find the title element */

      /* get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      // console.log(articleTitle);

      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      // console.log(linkHTML);

      /* insert link into titleList */
      titleList.innerHTML = titleList.innerHTML + linkHTML;

    }
    const links = document.querySelectorAll('.titles a');
    // console.log(links);

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }

  // Generate Tags

  function generateTags(){
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for (let article of articles) {

      /* find tags wrapper */
      const titleList = article.querySelector(optArticleTagsSelector);

      /* make html variable with empty string */
      let html = '';

      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);

      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);

      /* START LOOP: for each tag */
      for(let tag of articleTagsArray){
        console.log(tag);

        /* generate HTML of the link */
        const tagLinkHTML = '<li><a href=#' + tag + '"><span>' + tag + '</span></a></li>';
        console.log(tagLinkHTML);

        /* add generated code to html variable */
        html += tagLinkHTML;
      }
      /* END LOOP: for each tag */

      /* insert HTML of all the links into the tags wrapper */
      titleList.innerHTML = html

    /* END LOOP: for every article: */
    }

  generateTitleLinks();
}


}

generateTags();
