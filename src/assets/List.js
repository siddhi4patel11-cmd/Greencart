const list = [
    {
        id:1,
        img :["https://res.cloudinary.com/do98lw5ja/image/upload/v1755253284/greencart-products/dpev8zuvnzdt4d9qiikv.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWn-cHFyk9a7QMXszUCA3lP-dwDq31QwX5g&s",
            "https://res.cloudinary.com/do98lw5ja/image/upload/v1755253284/greencart-products/dpev8zuvnzdt4d9qiikv.png",
            "https://res.cloudinary.com/do98lw5ja/image/upload/v1755253284/greencart-products/dpev8zuvnzdt4d9qiikv.png"
        ],
        
        category:"vegetables",
        name : "potato",
        price : "$ 19",
    },
    {
        id:2,
        img :[
            "https://5.imimg.com/data5/SELLER/Default/2024/8/445343542/SU/HA/TW/90403351/22-kg-a-grade-red-delicious-apple-500x500.jpeg",
            "https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg?semt=ais_hybrid&w=740&q=80",
            "https://themeholy.com/wordpress/frutin/wp-content/uploads/2023/10/product_1_1.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tMJ1wEPJU57-M-FDjXd4NzoJBC6uOKNKBw&s"
        ] ,
        category:"fruits",
        name : "apple",
        price : "$ 10",
    },
    {
        id:3,
        img : [
            "https://coco-tea.ph/wp-content/uploads/2020/04/CoCo-Coffee-with-Pearl.png",
            "https://drinkcocoloco.com/cdn/shop/files/12.jpg?v=1748507647&width=533",
            "https://media.istockphoto.com/id/1252277049/photo/brown-chocolate-milkshake.jpg?s=612x612&w=0&k=20&c=MPndMvLoJm0WHoA1YneSTXmXl-OyFYCvc8h6iFlwvZc=",
            "https://www.shutterstock.com/image-photo/chocolate-milk-splash-out-glass-600nw-656876833.jpg"
        ],
        category:"cold-drink",
        name : "coco",
        price : "$ 5",
    },
    {
        id:4,
        img :[
             "https://m.media-amazon.com/images/I/71Y7pDHbi8L.jpg",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlKy2zPYWNTsuWLLUP5XnMiDInFAQi8kbX_w&s",
             "https://i.ebayimg.com/images/g/91QAAOSw10ZhTdSR/s-l400.jpg",
             "https://m.media-amazon.com/images/I/811YJ+-AnPL._UF1000,1000_QL80_.jpg"
        ],
        category:"instant food",
        name : "maggi",
        price : "$4",
    },
    {
        id:5,
        img : [
            "https://whytedairy.in/wp-content/uploads/2023/04/MIlk-Bottle.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqDp24u0vJ2kU0cmGmIM9fhGnpjTSlxonLA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLYLrpcL-2TKZDY0eljDthboDPMytCCRgVg&s",
            "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?resize=1366,1366"
        ],
        category:"dairy products",
        name : "milk",
        price : "$15",
    },
    {
        id:6,
        img : [
            "https://static.vecteezy.com/system/resources/previews/030/663/652/large_2x/cake-with-transparent-background-high-quality-ultra-hd-free-photo.jpg",
            "https://cakebee.in/cdn/shop/files/DSC06157_dc2bc3fe-0b76-4402-bb20-a48dfc5ea2a4.jpg?v=1703588115",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7x6786VLvfSL2E7XqCKdbO6W844Acv2y5aA&s",
            "https://www.fnp.com/images/pr/m/v20250612185059/black-forest-cake-half-kg-eggless.jpg"
        ],
        category:"bakery",
        name : "cake",
        price : "$12",
    },
    {
        id:7,
        img : [
            "https://parajorganics.com/wp-content/uploads/2019/12/wheat-flour-719186.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5nXAEWyq18lPtiHF7lfT-XNyLd6KUkArbVg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQ787CzrgI8k_zT7Kk3yLGNG86QNTpenKdQ&s",
            "https://daivikorganic.com/cdn/shop/products/4_3b7a5867-3758-4098-98bb-4eb444af492e.png?v=1670564660"
        ],
        category:"grains",
        name : "wheat flour",
        price : "$ 17",
    },
    {
        id:8,
        img : [
            "https://livekarts.in/wp-content/uploads/2021/05/mango.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4OzPMUZFtQ-TJxNf5k37h07WhwkJjgkezQ&s",
            "https://www.earthytales.in/uploads/products/3x/e3faabd5eae9df6ff66a21be273a00cf.jpg?v=190820256",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH73ee12_Lw-63UujjKcQ25ZTuKtl1_gNUcA&s"
        ],
        category:"Fruits",
        name : "Mango",
        price : "$20",
    },
    {
        id:9,
        img : [
            "https://www.organicgyaan.com/cdn/shop/files/Rolled_Oats.jpg?v=1721451250&width=1080",
            "https://vibrantliving.in/cdn/shop/files/RolledOats.png?v=1731058453&width=2048",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAboIfCayclREy7ZldlhOGfN3K9dtMCHDfSw&s",
            "https://vibrantliving.in/cdn/shop/files/SteelCutOats.png?v=1731058567&width=2048"
        ],
        category:"grains",
        name : "Oats",
        price : "$ 15",
    },
    {
        id:10,
        img : [
            "https://d3kgrlupo77sg7.cloudfront.net/media/l3-grocery2.shopnix.org/images/products/hypercity-fresh-sweet-lime-loose1-v-500-g.20171011123502.webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpUjC2_B7bvzNle94smQk2HrCeVrWIjXTqwg&s",
            "https://m.media-amazon.com/images/I/51902eHz2lL._UF1000,1000_QL80_.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcjdaGYqaaTt1rQgD8BTb7P8ceRkLh36Qew&s"
        ],
        category:"vegetables",
        name : "Lady finger",
        price : "$ 6",
    },
    {
        id:11,
        img : [
            "https://www.habibbakery.ae/cdn/shop/files/92A_afb6b1bc-00cd-4707-8c79-7d480683141d.png?v=1726507734",
            "https://kreamz.in/wp-content/uploads/2023/12/chocolaste-donut.webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYc82Yfy4Z9FIqLcCuqxVEO_KJzBMs1ApLg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIh-cqS6LsrlWeFRiWulZq4L3BqaIJg6BPA&s"
        ],
        category:"bakery",
        name : "donuts",
        price : "$ 20",
    },
    {
        id:12,
        img : [
            "https://www.affettoitaliano.co.uk/cdn/shop/products/fontal.jpg?v=1730278613&width=2048",
            "https://png.pngtree.com/png-clipart/20231014/original/pngtree-cheese-single-slice-isolated-png-background-free-png-png-image_13300709.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRcmWcjtSEleZWKPQWQAuCKHg0ZGFY32E5g&s",
            "https://cdn.zeptonow.com/production/tr:w-640,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/bb505416-f814-4270-b756-2fadcc289816.jpeg"
        ],
        category:"dairy products",
        name : "Cheeze",
        price : "$8",
    },
        {
        id:13,
        img : [
            "https://media.istockphoto.com/id/506320716/photo/bowl-of-instant-noodles-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=7H9ITitn_dR1OLHu3rLThiX9qqAxdTAyxL1nY1CfUIc=",
            "https://masterchow.in/cdn/shop/files/2_68dfa3b1-a644-4f79-8e8a-7f8abebc89c7.png?v=1728720820",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMGOJGMpMINJRL2gpYn30xXOzXt3uGfULoJ611JUBSNL_zr9dWSs_kQJfXM3ju-SPZwA&usqp=CAU",
            "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2025/3/18/994d0657-5a0e-48f7-bb1d-458f452f38db_801897.png"
        ],
        category:"instant food",
        name : "Ramen",
        price : "$10",
    },
        {
        id:14,
        img : [
            "https://hongphatfood.com/wp-content/uploads/2024/03/coca-soft-drink-320ml0.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2y2F5v4hMyDyexfy4QdsNRtYiQ_qiX9tbhQ&s",
            "https://m.media-amazon.com/images/I/81zlIBMkYiL.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNW6FUmDpPRu1f-QIzZlangQ7Qz21pNCmaw&s"
        ],

        category:"cold-drink",
        name : "Coco cola",
        price : "$8",
    },
        {
        id:15,
        img : [
            "https://www.collinsdictionary.com/images/full/strawberry_227472010.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSHz6J8ZRBx9-Lxx_O4p-ValtrUQ2jizWDQ&s",
            "https://www.stylecraze.com/wp-content/uploads/2013/09/21-Best-Benefits-Of-Strawberries-For-Skin-Hair-And-Health_1200px.jpg.webp",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTwnIIlqq2thN0bsPruXeSu6A9Iit3yilHA&s"
        ],
        category:"fruits",
        name : "strawberry",
        price : "$18",
    },
        {
        id:16,
        img : [
            "https://thumbs.dreamstime.com/b/blueberry-cheesecake-mint-isolated-white-background-crumbly-crust-glossy-topping-fresh-garnish-sits-showcasing-its-368878725.jpg",
            "https://cdn.vegetariantimes.com/wp-content/uploads/2021/04/passionfruit-white-chocolate-cheezecake.jpg?crop=1:1&width=1000",
            "https://josdelights.com/wp-content/uploads/2020/03/file1-12.jpg",
            "https://www.rawchefcarla.com/cdn/shop/products/9_e7e1d64d-c684-4320-b635-2e5f76cc5a45.png?v=1607635664"

        ],

        category:"bakery",
        name : " Cheezecake",
        price : "$8",
    },
        {
        id:17,
        img : [
            "https://images-cdn.ubuy.co.in/6521e39275d137349a5b1736-fresh-slicing-tomato-each.jpg",
            "https://img.freepik.com/free-photo/top-view-tomatoes-wooden-surface_141793-10265.jpg?semt=ais_hybrid&w=740&q=80",
            "https://img.freepik.com/free-photo/natural-tomatoes-isolated-background_53876-31687.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEObe_ExlWS9odYJFDrlep4Wu2lRdtF-LQvy31HnBiGsa-VXvA2rZ8GKzFcAyfdwIM8zw&usqp=CAU"
        ],
        category:"vegetables",
        name : "Tamatos",
        price : "$8",
    }
]

export default list