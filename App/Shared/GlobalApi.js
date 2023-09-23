import { create } from "apisauce";

const api = create({
    //  baseURL: 'http://192.168.0.113:1337/api',
    //React native will not fetch when we leave it at localhost
    // baseURL:'https://localhost:1337/api',
    baseURL:'http://192.168.1.143:1337/api',
    headers: { 
        //check to place it in .env file
        "X-API-Key":"0d675ea528b8c650c23ecdb703ee86201bad30a6e6be51d3322586cbb54c3727ed304bd77b3f2a9f008721a46303137336cca128252bde09aa371db402d14d0393f2e021be8a381d051842596e7b88b8dae88f188a1af7eeb38acebd1d139d77add9353454670b43c1eea592990fe3870a6ec743c8891e8323652c63677961ab"
      },
  })

const getSlider=()=>api.get('/sliders?populate=*');
const getVideoCourse=()=>api.get('video-courses?populate=*');
const getCourseList=(type)=>
api.get('course-lists?filters[type][$eq]='
+type+'&populate[Topic][populate][0]=Content&populate[image][populate][0]=image');

const setCourseProgress=(data)=>api.post('/course-progresses',data);

const getCourseProgress=(uid,courseId)=>
api.get('/course-progresses?filters[uid][$eq]='
+uid+'&filters[courseId][$eq]='+courseId)
export default{
    getSlider,
    getVideoCourse,
    getCourseList, 
    setCourseProgress,
    getCourseProgress
}