<template>
  <q-page class="bg-white">
    <div class="text-center q-pt-lg" style="font-size:23px; font-weight:600">News on Covid-19</div>

    <div class="q-mt-lg">

      <!-- parent news post div -->
      
      <div class="" 
      v-for="article in news"
      :key="article.id"
      style="border-bottom:rgb(221, 221, 221) solid 1px">
        <a :href="article.newsLink" style="text-decoration:none">
        <img :src="article.imageSrc" style="object-fit:cover; width:100%" alt="">
        <!-- body class -->
        <div class="q-px-md q-pt-sm">
           <div class="flex justify-between items-center">
              <div class="flex q-gutter-x-sm q-pl-xs">
                <div class="text-red" style="font-weight:700">{{article.area}}</div>
                <q-badge outline :color="article.color" style="font-weight:700" :label="article.areaSide" />
                
              </div>

              
              <div class="q-mr-sm q-mt-xs">
                <img :src="article.newsLogo" alt="" style="width:30px;height:30px" />
              </div>
              

          </div>

          <div class="q-px-xs text-grey-7" style="font-size:13x">{{article.date}}</div>

          <div class="q-px-xs text-black" style="font-weight:600;font-size:18px">{{article.title}}</div>
          <div class="q-mt-sm q-px-xs q-mb-md text-grey-7" style="font-size:13px">{{article.subtitle}} </div>


        </div>

         </a>
       
      </div>
      
     

    </div>
    
    


  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data () {
    return {
      news: [
        {
          id:'01',
          newsLink:'https://www.channelnewsasia.com/news/singapore/new-covid-19-clusters-tuition-centre-5-students-positive-14811400',
          imageSrc:'article-1.jpg',
          newsLogo:'st-logo.svg',
          date:'15 June 2021',
          area: 'Marine Parade',
          areaSide:'East',
          color:'green',
          title:'2 new COVID-19 clusters in Singapore, including tuition centre where 5 students test positive',
          subtitle:'SINGAPORE: Two new COVID-19 clusters have been identified in Singapore on Friday (May 14), one of which is linked to a tuition centre'
        },{
          id:'05',
          newsLink:'https://www.straitstimes.com/singapore/health/bukit-merah-view-market-cluster-grows-to-16-cases-one-unlinked-case-in-the',
          imageSrc:'article-5.jpg',
          newsLogo:'st-logo.svg',
          date:'14 June 2021',
          area: 'Bukit Merah',
          areaSide:'South',
          color:'purple',
          title:"Bukit Merah View market Covid-19 cluster grows to 16 cases, one unlinked case in the community",
          subtitle:'SINGAPORE - The Bukit Merah View market and food centre Covid-19 cluster has grown by 10 cases, said the Ministry of Health (MOH) on Monday night (June 14).'
        },
        
        {
          id:'04',
          newsLink:'https://www.straitstimes.com/singapore/ion-orchard-to-be-closed-for-four-days-for-cleaning-disinfecting-works',
          imageSrc:'article-4.jpg',
          newsLogo:'st-logo.svg',
          date:'12 June 2021',
          area: 'Orchard',
          areaSide:'Central',
          color:'red',
          title:"Ion Orchard to close for 4 days from June 12 due to Covid-19 cases; visitors to mall to get free swab tests",
          subtitle:'SINGAPORE - Ion Orchard will be shut for four days from Saturday (June 12) for cleaning and disinfecting works after the Ministry of Health (MOH) confirmed a number of Covid-19 cases linked to the shopping mall.'
        },
        {
          id:'02',
          newsLink:'https://www.channelnewsasia.com/news/singapore/covid-19-jem-westgate-cluster-50-cases-free-swab-tests-14880200',
          imageSrc:'article-2.jpg',
          newsLogo:'cna-logo.svg',
          date:'25 May 2021',
          area: 'Jurong East',
          areaSide:'West',
          color:'brown',
          title:'50 COVID-19 cases linked to Jem/Westgate cluster, free testing extended to those who visited from May 10-22',
          subtitle:'SINGAPORE: The Jem/Westgate COVID-19 cluster has grown to 50 cases, after six new cases and 40 previously unlinked cases were traced to the two malls on Monday night (May 24).'
        },
        {
          id:'03',
          newsLink:'https://www.straitstimes.com/singapore/health/singapores-largest-active-covid-19-cluster-what-went-wrong-at-changi-airport',
          imageSrc:'article-3.jpg',
          newsLogo:'st-logo.svg',
          date:'22 May 2021',
          area: 'Changi',
          areaSide:'East',
          color:'green',
          title:"Singapore's largest active Covid-19 cluster: What went wrong at Changi Airport?",
          subtitle:'SINGAPORE - In less than a month, the Covid-19 cluster at Changi Airport has swelled to more than 100 people, including airport workers whose jobs did not require them to interact with passengers, family members of front-line staff and visitors.'
        },{
          id:'06',
          newsLink:'https://www.channelnewsasia.com/news/singapore/covid-19-moh-causeway-point-woodlands-north-plaza-cases-visited-13920134',
          imageSrc:'article-6.jpg',
          newsLogo:'cna-logo.svg',
          date:'1 May 2021',
          area: 'Woodlands',
          areaSide:'North',
          color:'blue',
          title:"Causeway Point, Woodlands North Plaza among places visited by COVID-19 cases during infectious period",
          subtitle:"SINGAPORE: Shopping mall Causeway Point and Woodlands North Plaza were on Friday (Apr 30) added to the Ministry of Health's (MOH) list of public places visited by COVID-19 community cases during their infectious period. "
        },

      ]
    }
  }
}
</script>
