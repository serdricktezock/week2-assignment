console.log("wellcome");
// this is for reference 
console.log(document);

// i will be creating a place to store my Image 

let Image = [
    {
        src: "https://www.shutterstock.com/image-photo/autumn-nature-landscape-lake-bridge-fall-2198245029",
        alt: "lake bridge in the fall forest",
        width: 300,
        height: 200,
    },
    {
        src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpicjumbo.com%2Ffree-images%2Fnature%2F&psig=AOvVaw0pBucxD6_dEaqqoAS2E_NL&ust=1725756804508000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCZwqPPr4gDFQAAAAAdAAAAABAe",
        alt: "nature image",
        width: 300,
        height: 200,
    },
    {
        src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.diyphotography.net%2Ftravel-photography-isnt-just-shooting-pretty-landscapes-its-a-way-of-life%2F&psig=AOvVaw3uVsJEswT6cxMnWMgdgcRh&ust=1725876565428000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiK8LaNs4gDFQAAAAAdAAAAABAE", 
        alt: "pretty landscapes",
        width: 300,
        height: 200,
    },
    { 
        src:  "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "nature image",
        width: 300,
        height: 200,
    },
    {
        src: "https://images.pexels.com/photos/11002254/pexels-photo-11002254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", 
        alt: "An elephant walking gracefully through the savannah",
        width: 300,
        height: 200,  
    },
];
let currentindex = 0

// i select the dom Element to contain my images,
// select thumbnail container and main image container

function createthumbnails(thumbnailcontainer) {
    thumbnailcontainer.forEach(function (thumbnail, index) {
        const img =document. createElement("img");
        img.srcn = "value"
        function eventhandler() {}
        createlargeimage(thumbnail[index]);
        thumbnail.addeventlistener("click", eventhandler);
   });    
   }
   function createlargeimage(largeimage) {
    innerHTML = ""
    const img =document. createElement("img");


   }

