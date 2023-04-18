const json = await fetch('http://127.0.0.1:3000/src/json/data.json').then((response) =>
response.json()
);

let videoData = json.videos

let inputTitle = "";
        const input = () => {
            let title = localStorage.getItem("myValue");
            inputTitle += title
        }
        input();
        console.log(inputTitle);
            let arr:any[] = [];
                    videoData.filter((video: { title: string; heroimg: any; slug: any; icon: any; chanel: any; views: any; time: any; }) => {
                        const secondTitle = video.title.toLowerCase().split(" ");
                        if (secondTitle.includes(inputTitle)) {
                            const title = video.title;
                            const heroimg = video.heroimg;
                            const slug = video.slug;
                            const icon = video.icon;
                            const chanel = video.chanel;
                            const views = video.views;
                            const time = video.time;
                            const obj = {title, heroimg, slug, icon, chanel, views, time}
                            arr.push(obj)
                        }
                    })
export default arr