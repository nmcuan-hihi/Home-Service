import { request, gql } from 'graphql-request'

const URL = "https://api-ap-northeast-1.hygraph.com/v2/clvbx2ejh2rs907ut6rz5pghv/master";

const getSlider = async() => {
    const document = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
  `
   const result =  await request(URL, document);
   return result;
}
const getCategory = async() => {
    const document = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `
   const result =  await request(URL, document);
   return result;
}
const getList = async() => {
    const document = gql`
    query GetList {
      lists {
        id
        name
        email
        contact
        category {
          name
        }
        address
        about
        images {
          url
        }
      }
    }
  `
   const result =  await request(URL, document);
   return result;
}
const getListByCategory = async(category) => {
    const document = gql`
    query GetList {
      lists(where: {category: {name: "`+category+`"}}) {
        id
        name
        email
        contact
        category {
          name
        }
        address
        about
        images {
          url
        }
      }
    }
  `
   const result =  await request(URL, document);
   return result;
}
export default{
    getSlider, getCategory, getList, getListByCategory
}
