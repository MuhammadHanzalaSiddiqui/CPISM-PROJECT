function getId() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id')
    return id;

}

let trainerData = [{
    // Pista start
    id: 1,
    imgSrc: '../assets/products/pista/p01.png',
    name: "Salted Iranian Pistachio 250GM",
    details: "Savor the exquisite taste of salted Iranian pistachios, renowned for their unparalleled quality and flavor. Grown in the fertile lands of Iran, these pistachios boast a perfect balance of saltiness and richness, captivating taste buds with every bite. Enjoy them as a luxurious snack or elevate your culinary creations with their superior taste and texture. Delight in the essence of Iranian pistachios, a true delicacy cherished around the globe.",
    price: " Price : PKR 850"
},
{
    id: 2,
    imgSrc: '../assets/products/pista/p02.png',
    name: "Roasted Pistachio 250GM",
    details: " Discover the delightful crunch and rich flavor of roasted pistachios. Perfect for snacking or adding to your favorite recipes, these savory treats elevate any moment with their irresistible taste and satisfying texture.",
    price: " Price : PKR 780"

},
{
    id: 3,
    imgSrc: '../assets/products/pista/p05.jpeg',
    name: "Green Pistachios kernels 250GM",
    details: "Green pistachio kernels, prized for their vibrant hue and intense flavor, offer a pure indulgence for the senses. With their delicate texture and rich nuttiness, these kernels elevate both sweet and savory dishes, adding a burst of color and taste to every culinary creation.",
    price: " Price : PKR 800",
},
{
    id: 4,
    imgSrc: '../assets/products/pista/p03.png',
    name: "Pistachios Kernels 250GM",
    details: "Pistachio kernels, the heart of the nut, encapsulate a world of flavor and nutrition. These creamy, buttery morsels boast a satisfying crunch and a rich, nutty taste that enhances both sweet and savory dishes. Whether enjoyed straight from the shell or sprinkled over salads, desserts, or main courses, pistachio kernels add a touch of elegance and indulgence to any culinary masterpiece.",
    price: " Price : PKR 760",
},
{
    id: 5,
    imgSrc: '../assets/products/pista/p04.png',
    name: "Salted Pisatachio Kernals 250GM",
    details: "Satisfy your cravings with salted pistachio kernels. These crunchy delights offer the perfect balance of savory flavor and rich nuttiness, making them an irresistible snack for any occasion. Enjoy them on their own or use them to elevate your favorite recipes with a burst of gourmet taste.",
    price: " Price : PKR 900",
},
{
    id: 6,
    imgSrc: '../assets/products/pista/p05.jpeg',
    name: "Green Iranian Pistachio Kernals 250GM",
    details: "Iranian pistachios boast a rich history dating back thousands of years, symbolizing health and prosperity. Renowned for diverse varieties and cultivated with generational expertise, they stand as a pinnacle of quality and taste.",
    price: " Price : PKR 980",
},
{
    id: 7,
    imgSrc: '../assets/products/pista/p03.png',
    name: "Afghanistani Pistachio Kernal 250GM",
    details: "Afghani pistachio kernels offer a taste of rugged beauty and rich flavor. Grown in the mountainous regions of Afghanistan, these kernels boast a distinct nuttiness and buttery texture, reflecting the unique terroir of their origin.",
    price: " Price : PKR 750",
},
{
    id: 8,
    imgSrc: '../assets/products/pista/p04.png',
    name: "Pakistani Pistachio Kernals 250GM",
    details: "Pakistani pistachio kernels embody the essence of the country's fertile lands and rich agricultural heritage. Grown in regions like Balochistan and Khyber Pakhtunkhwa, these kernels offer a delightful blend of flavor and texture. Renowned for their vibrant green color and creamy consistency.",
    price: " Price : PKR 800",
},
{
    id: 9,
    imgSrc: '../assets/products/pista/p03.png',
    name: "Premium Pakistani Pistachio Kernals 200GM",
    details: "Pakistani pistachio kernels embody the essence of the country's fertile lands and rich agricultural heritage. Grown in regions like Balochistan and Khyber Pakhtunkhwa, these kernels offer a delightful blend of flavor and texture. Renowned for their vibrant green color and creamy consistency.",
    price: " Price : PKR 1000",
},
{
    id: 10,
    imgSrc: '../assets/products/pista/p02.png',
    name: "Salted Pakistani Pistachio 250GM",
    details: "Savor the unique blend of flavors in salted Pakistani pistachios. Grown in the fertile lands of Pakistan, these pistachios are carefully selected and seasoned to perfection, offering a harmonious balance of savory saltiness and rich nuttiness.",
    price: " Price : PKR 700",
},
{
    id: 11,
    imgSrc: '../assets/products/pista/p04.png',
    name: "Badami Pistachio Kernals (Pak) 250GM",
    details: "Badami pistachios are cultivated mainly in the Balochistan province of Pakistan. They are characterized by their slightly smaller size and darker color compared to Kermani pistachios. Badami pistachios have a slightly more intense flavor and are often preferred for their robust taste.",
    price: " Price : PKR 600",
},
{
    id: 12,
    imgSrc: '../assets/products/pista/p06.png',
    name: "Kermani Pistachio Kernals 250GM",
    details: "Named after the Kerman region of Iran, Kermani pistachios are grown in the Punjab and Sindh provinces of Pakistan. They are known for their vibrant green color, plump kernels, and rich, buttery flavor.",
    price: " Price : PKR 670",
},
// Pista end

// Almond start
{
    id: 13,
    imgSrc: '../assets/products/almonds/a1.png',
    name: "Australian Almonds 250GM",
    details: "Australian almonds are renowned globally for their high quality and exceptional taste. Cultivated in the sun-drenched regions of Australia, particularly in states like Victoria, South Australia, and New South Wales, these almonds thrive in the country's favorable climate and fertile soils.",
    price: " Price : PKR 900",
},
{
    id: 14,
    imgSrc: '../assets/products/almonds/a1.png',
    name: "American Almonds 250GM",
    details: "American almonds are a staple of the global nut industry, renowned for their versatility, nutritional value, and widespread usage in various culinary applications. Cultivated predominantly in California, the leading almond-producing state in the United States, American almonds hold a significant position in both domestic and international markets.",
    price: " Price : PKR 850",
},
{
    id: 15,
    imgSrc: '../assets/products/almonds/a1.png',
    name: "Pakistani Almonds 250GM",
    details: "Pakistani almonds, also known as Badam in Urdu, are a cherished nut variety that holds cultural significance and nutritional value in Pakistan and beyond. These almonds are primarily cultivated in regions with suitable climates, such as the northern areas of Pakistan, including Gilgit-Baltistan and parts of Khyber Pakhtunkhwa province.",
    price: " Price : PKR 800",
},

{
    id: 16,
    imgSrc: '../assets/products/almonds/a2.png',
    name: "Peeled Almonds 250GM",
    details: "Peeled almonds, also known simply as blanched almonds, are almonds from which the outer skin or pellicle has been removed. This process involves briefly immersing the almonds in boiling water to loosen the skin, followed by rinsing in cold water and then gently removing the skins. The result is a smooth, ivory-colored almond kernel.",
    price: " Price : PKR 880",
},
{
    id: 17,
    imgSrc: '../assets/products/lmonds/a3.png',
    name: "Carmel Almonds 250GM",
    details: "Carmel almonds are slightly larger and more elongated compared to Nonpareil almonds. They have a slightly stronger flavor and are commonly used in baking, confectionery, and culinary applications.",
    price: " Price : PKR 650",
},
{
    id: 18,
    imgSrc: '../assets/products/almonds/a4.png',
    name: "American Sliced Almonds 250GM",
    details: "Sliced almonds are almonds that have been thinly sliced, typically lengthwise, resulting in flat, oval-shaped pieces. They are often used as a topping for salads, yogurt, oatmeal, and desserts. Sliced almonds can also be incorporated into baked goods such as cakes, cookies, and pastries to add texture and visual appeal.",
    price: " Price : PKR 520",
},
{
    id: 19,
    imgSrc: '../assets/products/almonds/a5.png',
    name: "Marcona Almonds 250GM",
    details: "Marcona almonds are a Spanish variety known for their rounder shape, softer texture, and sweeter flavor compared to traditional almonds. They are often used in gourmet dishes, tapas, and desserts.",
    price: " Price : PKR 780",
},
{
    id: 20,
    imgSrc: '../assets/products/almonds/a5.png',
    name: "Non-Pareil Almonds 250GM",
    details: " Nonpareil almonds are known for their smooth texture, mild flavor, and uniform shape. They are often used for snacking, as well as in confectionery and baking due to their aesthetic appeal.",
    price: " Price : PKR 880",
},
{
    id: 21,
    imgSrc: '../assets/products/almonds/a3.png',
    name: "Mission Almonds 250GM",
    details: "Mission almonds have a darker brown skin and a stronger, more robust flavor compared to other almond varieties. They are commonly used in roasted almond products, such as flavored almonds and almond snacks.",
    price: " Price : PKR 840",
},
{
    id: 22,
    imgSrc: '../assets/products/almonds/a3.png',
    name: "Californian Almonds 250GM",
    details: "Californian almonds are larger in size compared to local varieties and are known for their sweet and mild flavor. They are widely used in both sweet and savory dishes in Pakistani cuisine, as well as enjoyed as a nutritious snack on their own",
    price: " Price : PKR 780",
},
{
    id: 23,
    imgSrc: '../assets/products/almonds/a1.png',
    name: "Gurbandi Almonds 250GM",
    details: "Gurbandi almonds are characterized by their small size and elongated shape. They have a slightly bitter taste and are often used in making almond paste for various savory dishes and desserts in Pakistani cuisine.",
    price: " Price : PKR 860",
},
{
    id: 24,
    imgSrc: '../assets/products/almonds/a5.png',
    name: "Premium American Almonds 250GM",
    details: "Premium American almonds are renowned for their superior quality and taste. Grown in California, the heart of almond production in the United States, these almonds are carefully cultivated in optimal growing conditions, resulting in large, plump kernels with a rich, buttery flavor.",
    price: " Price : PKR 680",
},
// Almond end

// Cashew start
{
    id: 25,
    imgSrc: '../assets/products/cashew/c2.png',
    name: "Premium Cashew Nuts 250GM",
    details: "Experience the exquisite taste of premium cashew nuts. Handpicked for their superior quality and freshness, these nuts boast a creamy texture and buttery flavor that's simply unmatched. Elevate your snacking with the indulgence of premium cashews.",
    price: " Price : PKR 950",
},
{
    id: 26,
    imgSrc: '../assets/products/cashew/c2.png',
    name: "Plain Cashew Nuts 250GM",
    details: "Raw cashew nuts offer a pure and natural taste experience. Untouched by processing, these nuts retain their original flavor and nutritional goodness. With a creamy texture and subtle sweetness, raw cashews are perfect for snacking or adding to your favorite recipes.",
    price: " Price : PKR 780",
},
{
    id: 27,
    imgSrc: '../assets/products/cashew/c3.png',
    name: "Iranian Cashew Nuts 250GM",
    details: "While Iran is not a major producer of cashew nuts compared to some other countries, Iranian cashews are prized for their quality and taste. They are known for their large size and rich, creamy flavor.",
    price: " Price : PKR 890",
},
{
    id: 28,
    imgSrc: '../assets/products/cashew/c2.png',
    name: "Brazilian Cashew Nuts 250GM",
    details: "Brazil is a significant producer of cashew nuts, particularly the variety known as Brazil nuts. Brazilian cashews are known for their rich, buttery flavor and are commonly used in cooking, baking, and confectionery.",
    price: " Price : PKR 960",
},
{
    id: 29,
    imgSrc: '../assets/products/cashew/c5.png',
    name: "Roasted Cashew Nuts 250GM",
    details: "Roasted cashew nuts, with their irresistible crunch and creamy texture, are a culinary delight that satisfies snack cravings and adds depth to various dishes. This delectable treat begins with raw cashews, carefully roasted to perfection, unlocking their full flavor potential.",
    price: " Price : PKR 900",
},
{
    id: 30,
    imgSrc: '../assets/products/cashew/c1.png',
    name: "Salted Cashew Nuts 250GM",
    details: "Salted cashew nuts are a beloved snack cherished for their irresistible combination of crunchy texture and savory flavor. These delectable treats start with premium cashew nuts, carefully roasted to perfection, before being adorned with a sprinkle of salt, enhancing their natural nuttiness.",
    price: " Price : PKR 920",
},
{
    id: 31,
    imgSrc: '../assets/products/cashew/c4.png',
    name: "Indian Cashew Nuts 250GM",
    details: "India is not only a significant producer of cashew nuts but also a major consumer. The country produces various types of cashew nuts, including both raw and processed forms. Indian cashews are known for their size and flavor.",
    price: " Price : PKR 950",
},
{
    id: 32,
    imgSrc: '../assets/products/cashew/c5.png',
    name: "Salted & Roasted Cashew Nuts 250GM",
    details: "One of the most wonderful things about salted and roasted cashew nuts is their versatility. Not only are they a delicious snack straight out of the bag, but they also elevate a wide range of dishes to new heights of flavor and texture.",
    price: " Price : PKR 1,200",
},
{
    id: 33,
    imgSrc: '../assets/products/cashew/c2.png',
    name: "Organic Cashew Nuts 250GM",
    details: "Raw organic cashew nuts are grown and processed without the use of synthetic pesticides or fertilizers, making them a natural and environmentally friendly choice.",
    price: " Price : PKR 1,000",
},
{
    id: 34,
    imgSrc: '../assets/products/cashew/c3.png',
    name: "Philippinies Cashew Nuts 250GM",
    details: "The Philippines is a significant producer of cashew nuts in Southeast Asia. Cashew cultivation is mainly concentrated in the southern part of the country, where the climate is suitable for cashew tree growth.",
    price: " Price : PKR 890",
},
{
    id: 35,
    imgSrc: '../assets/products/cashew/c3.png',
    name: "Ghana Cashew Nuts 250GM",
    details: "Ghana is a significant producer of cashew nuts in West Africa. The country's cashew industry has been growing steadily in recent years, and efforts are underway to improve productivity and quality.",
    price: " Price : PKR 750",
},
{
    id: 36,
    imgSrc: '../assets/products/cashew/c2.png',
    name: "Local Cashew Nuts 250GM",
    details: "While Pakistan is not traditionally known as a major producer of cashew nuts, it does have some cultivation of cashew trees in certain regions. Cashew cultivation here is limited due to the country's climate and soil conditions, which are not suited for cashew to growth compared to tropical regions like Southeast Asia and parts of Africa.",
    price: " Price : PKR 900",
},
// Cashew end

// walnut start
{
    id: 37,
    imgSrc: '../assets/products/wallnut/w1.png',
    name: "American Kaghzi Walnut 250GM",
    details: "In the vast orchards of America, nestled amidst the rolling landscapes, the American Kagzi Walnut stands as a testament to nature's artistry. With its distinctively smooth and delicate shell, reminiscent of fine parchment, this walnut variety captivates both the eye and the palate.",
    price: " Price : PKR 890",
},
{
    id: 38,
    imgSrc: '../assets/products/wallnut/w5.png',
    name: "American Hard Walnut 250GM",
    details: "Crack open one of these formidable shells, and you're met with a treasure trove of nutmeat—a creamy, ivory-colored kernel prized for its rich, buttery taste. Whether enjoyed on its own as a wholesome snack or incorporated into a myriad of culinary creations, the American hard walnut leaves a lasting impression on the palate.",
    price: " Price : PKR 900",
},
{
    id: 39,
    imgSrc: '../assets/products/wallnut/w4.png',
    name: "Californian Whole Walnut 250GM",
    details: "California walnuts are a variety of English walnuts that are grown primarily in California, which is one of the largest walnut-producing regions in the world. They are prized for their high quality and are commonly used in a wide range of culinary applications.",
    price: " Price : PKR 950",
},
{
    id: 40,
    imgSrc: '../assets/products/wallnut/w4.png',
    name: "Chandler Whole Walnuts 250GM",
    details: " Chandler walnuts are known for their large size and light-colored kernels. They have a mild, buttery flavor and are commonly grown in various regions worldwide, including Pakistan.",
    price: " Price : PKR 850",
},
{
    id: 41,
    imgSrc: '../assets/products/wallnut/w2.png',
    name: "American Walnut Kernals 250GM",
    details: " Crack open the tough exterior, and you're greeted by the distinctive aroma of toasted nuts, a prelude to the culinary adventure that awaits. Each bite reveals a dense, meaty texture, an exquisite balance of creamy and crunchy that tantalizes the palate.",
    price: " Price : PKR 1,000",
},
{
    id: 42,
    imgSrc: '../assets/products/wallnut/w2.png',
    name: "Howard Walnut Kernals 250GM",
    details: "Howard walnuts are another popular variety known for their large, plump kernels. They have a rich, sweet flavor and are often used in baking and cooking.",
    price: " Price : PKR 1,000",
},

{
    id: 43,
    imgSrc: '../assets/products/wallnut/w1.png',
    name: "Californian Walnut Kernals 250GM",
    details: "California walnuts are a variety of English walnuts that are grown primarily in California, which is one of the largest walnut-producing regions in the world. They are prized for their high quality and are commonly used in a wide range of culinary applications.",
    price: " Price : PKR 990",

},
{
    id: 44,
    imgSrc: '../assets/products/wallnut/w1.png',
    name: " Chandler Walnut Kernals 250GM",
    details: " Chandler walnuts are known for their large size and light-colored kernels. They have a mild, buttery flavor and are commonly grown in various regions worldwide, including Pakistan.",
    price: " Price : PKR 960",
},
{
    id: 45,
    imgSrc: '../assets/products/wallnut/w1.png',
    name: "Premium Walnut Kernals 250GM",
    details: " In the realm of gourmet delights, few treasures rival the premium walnut kernel—a jewel coveted by connoisseurs for its unparalleled quality and sublime taste. From the moment it graces the palate, its essence unfolds with grace, offering a symphony of flavors and textures that captivate the senses.",
    price: " Price : PKR 780",
},
{
    id: 46,
    imgSrc: '../assets/products/wallnut/w2.png',
    name: "Pakistani Walnut Kernals 250GM",
    details: "Crack open the sturdy shell, and you're greeted by the warm, earthy aroma of toasted nuts—a fragrant invitation to indulge in nature's bounty. Each kernel reveals a dense, meaty texture, a symphony of creamy softness and satisfying crunch that delights the palate with every bite.",
    price: " Price : PKR 750",
},
{
    id: 47,
    imgSrc: '../assets/products/wallnut/w3.png',
    name: " Pakistani Walnuts 250GM",
    details: " Crack open the sturdy shell, and you're greeted by the warm, earthy aroma of toasted nuts—a fragrant invitation to indulge in nature's bounty. Each kernel reveals a dense, meaty texture, a symphony of creamy softness and satisfying crunch that delights the palate with every bite.",
    price: " Price : PKR 1,000",
},
{
    id: 48,
    imgSrc: '../assets/products/wallnut/w3.png',
    name: " Premium Afghani Walnuts 250GM",
    details: "  Crack open the sturdy shell, and you're greeted by the warm, earthy aroma of toasted nuts—a fragrant invitation to indulge in nature's bounty. Each kernel reveals a dense, meaty texture, a symphony of creamy softness and satisfying crunch that delights the palate with every bite.",
    price: " Price : PKR 999",
},
// wallnut end

// dates start
{
    id: 49,
    imgSrc: '../assets/products/dates/d1.png',
    name: "Mabroom Dates 250GM",
    details: " revered for their exquisite taste and unique characteristics, hold a special place among date connoisseurs. Originating from the deserts of the Middle East, particularly Saudi Arabia, Mabroom dates are distinguished by their elongated shape, firm texture, and rich, caramel-like flavor. ",
    price: " Price : PKR 1,150",
},
{
    id: 50,
    imgSrc: '../assets/products/dates/d2.png',
    name: " Sugai Dates 250GM",
    details: " Hailing from Saudi Arabia, are renowned for their rich, caramel-like flavor and firm, elongated shape. Symbolizing blessings and prosperity, they're treasured for their exquisite taste and cultural significance, making them a prized indulgence. ",
    price: " Price : PKR 1,100",
},
{
    id: 51,
    imgSrc: "../assets/products/dates/d3.png",
    name: " Premium Ajwa Dates 250GM",
    details: "Originating from the blessed lands of Medina, are revered for their unique taste and numerous health benefits. With a rich, velvety texture and a hint of sweetness, Ajwa dates symbolize nourishment and wellness, embodying the essence of wholesome indulgence. ",
    price: " Price : PKR 1,500",
},
{
    id: 52,
    imgSrc: '../assets/products/dates/d3.png',
    name: "Ajwa Dates 250GM",
    details: "Originating from the blessed lands of Medina, are revered for their unique taste and numerous health benefits. With a rich, velvety texture and a hint of sweetness, Ajwa dates symbolize nourishment and wellness, embodying the essence of wholesome indulgence. ",
    price: " Price : PKR 1,100",
},
{
    id: 53,
    imgSrc: '../assets/products/dates/d4.png',
    name: " Amber Dates 250GM",
    details: "Amber dates, sourced from the sun-kissed orchards of the Middle East, captivate with their golden hue and luscious sweetness. Each bite offers a taste of pure indulgence, while their rich flavor and tender texture make them a cherished delight.",
    price: "Price : PKR 950",
},
{
    id: 54,
    imgSrc: '../assets/products/dates/d5.png',
    name: " Medjool Dates 250GM",
    details: "Medjool dates, affectionately known as the King of Dates, originate from the sun-drenched groves of Morocco and the Middle East. With their succulent, caramel-like flavor and soft, chewy texture, Medjool dates offer a luxurious taste experience.",
    price: " Price : PKR 1,000",
},
{
    id: 55,
    imgSrc: '../assets/products/dates/d6.png',
    name: " Kalmi Dates 250GM",
    details: "Kalmi dates, with origins rooted in the fertile soils of Iraq and the Middle East, offer a unique combination of sweetness and chewiness. Renowned for their rich flavor and tender texture, Kalmi dates are a delightful treat, symbolizing the abundance and richness of nature's bounty.",
    price: " Price : PKR 950",
},
{
    id: 56,
    imgSrc: '../assets/products/dates/d7.png',
    name: " Irani Mazafati Dates 250GM",
    details: "Iranian Mazafati dates, also known as Bam dates, are esteemed for their exceptional quality and luscious taste. Hailing from the verdant regions of Iran, these soft, dark dates boast a velvety texture and a rich, caramel-like flavor.  ",
    price: " Price : PKR 200",
},
{
    id: 57,
    imgSrc: '../assets/products/dates/d8.png',
    name: "Dry Iranian Dates 250GM",
    details: "Dry Iranian dates, originating from the sun-drenched orchards of Iran, offer a delectable blend of sweetness and chewiness. With their rich flavor and satisfying texture, these dates are a beloved snack, perfect for enjoying on their own or as a versatile ingredient in various culinary creations. ",
    price: "Price : PKR 350",
},

{
    id: 58,
    imgSrc: '../assets/products/dates/d9.png',
    name: " Dried Zahidi Dates 250GM",
    details: "cultivated in the arid regions of the Middle East, captivate with their firm texture and subtly sweet flavor. These golden-brown gems are prized for their versatility, whether enjoyed as a nutritious snack or used to add a delightful touch to both sweet and savory dishes.",
    price: "Price : PKR 500",
},
{
    id: 59,
    imgSrc: '../assets/products/dates/d11.png',
    name: "Premium Medjool Dates 250GM",
    details: "Medjool dates, affectionately known as the King of Dates, originate from the sun-drenched groves of Morocco and the Middle East. With their succulent, caramel-like flavor and soft, chewy texture, Medjool dates offer a luxurious taste experience.",
    price: " Price : PKR 1,150",
},
{
    id: 60,
    imgSrc: '../assets/products/dates/d10.png',
    name: "Fresh Chuwarey 250GM",
    details: "Chuwarey, originating from Pakistan and India, are small, dried dates known for their intense sweetness and chewy texture. These bite-sized delights are rich in flavor and prized for their natural energy-boosting properties.",
    price: "Price : PKR 200",
},
// dates end

// raisins start
{
    id: 61,
    imgSrc: '../assets/products/raisins/r8.png',
    name: " Russian Green Raisins 250GM",
    details: " Green Russian raisins, also known as green sultanas, offer a unique twist on the classic dried fruit. With their vibrant green color and tangy-sweet flavor, these raisins provide a refreshing burst of taste and visual appeal.",
    price: " Price : PKR 350 ",
},
{
    id: 62,
    imgSrc: '../assets/products/raisins/r3.png',
    name: " Golden Raisins 250GM",
    details: "Golden raisins, prized for their delicate sweetness and golden hue, are a delightful variation of the classic dried fruit. With a tender texture and mellow flavor, these raisins offer a burst of sunshine in every bite. ",
    price: " Price : PKR 300",
},
{
    id: 63,
    imgSrc: '../assets/products/raisins/r8.png',
    name: "Green Desi Raisins 250GM",
    details: "Green raisins, also known as sultanas, are a delightful departure from traditional dried fruits. With their vibrant green color and subtly sweet flavor, these raisins offer a refreshing and tangy taste experience.",
    price: "Price : PKR 200",
},
{
    id: 64,
    imgSrc: '../assets/products/raisins/r3.png',
    name: "Golden Russian Raisins 250GM",
    details: "Characterized by their light color and sweet flavor, offer a delectable twist on the classic dried fruit. With their delicate texture and subtle sweetness, these raisins provide a delightful burst of flavor in every bite.",
    price: " Price : PKR 300",
},
{
    id: 65,
    imgSrc: '../assets/products/raisins/r1.png',
    name: "Munnaka Raisins 250GM",
    details: "also known as Munakka or Indian raisins, are a special type of dried fruit derived from large, seedless grapes. These raisins boast a dark color and a distinct sweet flavor, making them a popular choice in Indian cuisine and traditional medicine. ",
    price: "Price : PKR 400",
},
{
    id: 66,
    imgSrc: '../assets/products/raisins/r5.png',
    name: "Dried Black Berries 250GM",
    details: "Dried blackberries, with their intense flavor and chewy texture, offer a delightful burst of sweetness in every bite. These dark gems are packed with antioxidants and nutrients, making them not only delicious but also nutritious. ",
    price: "Price : PKR 600 ",
},
{
    id: 67,
    imgSrc: '../assets/products/raisins/r4.png',
    name: "Dried Prunes 250GM",
    details: "Dried prunes, prized for their rich flavor and chewy texture, are a timeless favorite in the world of dried fruits. These plump and succulent gems offer a sweet and tangy taste with subtle notes of caramel.",
    price: "Price : PKR 650 ",
},
{
    id: 68,
    imgSrc: '../assets/products/raisins/r8.png',
    name: "Premium Local Green Raisins 400GM ",
    details: " Embrace a sporty-chic look with the Ophidia GG Supreme Belt Bag. The monogram canvas, green and red Web stripe, and leather trim create a dynamic design. Wear it around your waist or as a crossbody for a versatile style.",
    price: "Price : PKR 800",
},
{
    id: 69,
    imgSrc: '../assets/products/raisins/r2.png',
    name: " Dried Mulberries 250GM",
    details: "with their unique sweet-tart flavor and chewy texture, offer a delightful taste of nature's bounty. These dark-colored berries are rich in antioxidants, vitamins, and minerals, making them a nutritious snack choice. ",
    price: " Price : PKR 700 ",
},
{
    id: 70,
    imgSrc: '../assets/products/raisins/r3.png',
    name: " Turkey's Golden Raisins 250GM",
    details: " Turkey, one of the largest exporters of raisins in the world. Known for their golden hue and sweet flavor, these raisins are cultivated in the fertile regions of Turkey and are prized for their quality and taste. ",
    price: " Price : PKR 380",
},
// raisins end

// fig start
{
    id: 71,
    imgSrc: '../assets/products/fig/f1.png',
    name: " Premium Dried Figs 250GM",
    details: "Revered for their exceptional quality and flavor, offer a luxurious taste experience. These figs, carefully selected and expertly dried, boast a tender texture and rich, sweet taste that sets them apart. With each bite, one savors the essence of indulgence and sophistication, as the natural sweetness of the figs envelops the palate in a symphony of flavor.",
    price: " Price : PKR 800",
},
{
    id: 72,
    imgSrc: '../assets/products/fig/f2.png',
    name: " Organic Dried Fig 500GM",
    details: "Cultivated without the use of synthetic pesticides or fertilizers, offer a pure and natural taste experience. These figs, grown with care and respect for the environment, boast a rich flavor and tender texture that is true to the fruit's essence. ",
    price: " Price : PKR 2,000 ",
},

{
    id: 73,
    imgSrc: '../assets/products/fig/f4.png',
    name: "Dry Afghani Figs 250GM",
    details: "Revered for their exceptional quality and flavor, offer a luxurious taste experience. These figs, carefully selected and expertly dried, boast a tender texture and rich, sweet taste that sets them apart. With each bite, one savors the essence of indulgence.",
    price: " Price : PKR 920",
},
{
    id: 74,
    imgSrc: '../assets/products/fig/f7.png"',
    name: "Dried Large Figs 250GM",
    details: "Dried large figs, characterized by their generous size and rich flavor, offer a satisfyingly indulgent taste experience. These figs, carefully selected for their plumpness and sweetness, boast a chewy texture and a natural sweetness that delights the palate with every bite.",
    price: " Price : PKR 400 ",
},
{
    id: 75,
    imgSrc: '../assets/products/fig/f5.png',
    name: "Premium Grade Fig 1KG",
    details: "Revered for their exceptional quality and flavor, offer a luxurious taste experience. These figs, carefully selected and expertly dried, boast a tender texture and rich, sweet taste that sets them apart. With each bite, one savors the essence of indulgence.",
    price: " Price : PKR 3,000",
},
{
    id: 76,
    imgSrc: '../assets/products/fig/f6.png',
    name: "Dried Turkish Figs 250GM",
    details: "Esteemed for their exceptional quality and sweet flavor, offer a taste of Mediterranean indulgence. Sourced from the fertile lands of Turkey, these figs are prized for their plumpness, chewy texture, and rich, honey-like sweetness.",
    price: " Price : PKR 1,000",
},
{
    id: 77,
    imgSrc: '../assets/products/fig/f4.png',
    name: "Medium Dried Figs 250GM",
    details: "Revered for their exceptional quality and flavor, offer a luxurious taste experience. These figs, carefully selected and expertly dried, boast a tender texture and rich, sweet taste that sets them apart. With each bite, one savors the essence of indulgence.",
    price: " Price : PKR 650 ",
},
{
    id: 78,
    imgSrc: '../assets/products/fig/f8.png"',
    name: " Iranian Dried Fig 250GM",
    details: "renowned for their superior quality and rich flavor, offer a taste of Middle Eastern excellence. Sourced from the sun-drenched orchards of Iran, these figs are prized for their tender texture, honey-like sweetness, and delicate floral notes. ",
    price: " Price : PKR 600 ",
},
{
    id: 79,
    imgSrc: '../assets/products/fig/f3.png',
    name: " Swat Special Fig 250GM",
    details: "Grown in the pristine Himalayan foothills, these figs are celebrated for their exceptional sweetness, tender texture, and rich flavor.",
    price: " Price : PKR 500 ",
},
// fig ends

// peanuts start
{
    id: 80,
    imgSrc: '../assets/products/peanuts/p3.png',
    name: "Peanut Chikki 200GM BAR",
    details: " A beloved treat in Indian cuisine, embodies the perfect fusion of sweetness and nuttiness. Crafted from roasted peanuts and jaggery (unrefined cane sugar), this traditional confection offers a delightful crunch and a rich caramel flavor. ",
    price: "Price : PKR 300",
},
{
    id: 81,
    imgSrc: '../assets/products/peanuts/p2.png',
    name: "Parachinar Whole Peanuts 250GM",
    details: "  Parachinar whole peanuts, revered for their exceptional quality and robust flavor, originate from the fertile lands of Parachinar, a region in Pakistan known for its agriculture. These whole peanuts are prized for their plumpness, crunchy texture, and rich nutty taste. ",
    price: " Price : PKR 500",
},
{
    id: 82,
    imgSrc: '../assets/products/peanuts/p5.png',
    name: "Parachinar Roasted Whole Peanuts 250GM",
    details: "Parachinar whole peanuts, revered for their exceptional quality and robust flavor, originate from the fertile lands of Parachinar, a region in Pakistan known for its agriculture. These whole peanuts are prized for their plumpness, crunchy texture, and rich nutty taste.",
    price: " Price : PKR 700",
},
{
    id: 83,
    imgSrc: '../assets/products/peanuts/p2.png',
    name: "Bold Whole Peanuts 250GM ",
    details: " named for their larger size and robust flavor, are one of the most common varieties found in Pakistan. These peanuts have a uniform shape and size, making them ideal for various culinary uses.",
    price: " Price : PKR 300",
},
{
    id: 84,
    imgSrc: '../assets/products/peanuts/p2.png',
    name: " Valencia Whole Peanuts 250GM",
    details: "Renowned for their naturally sweet flavor and distinctively small size, are a cherished variety available in Pakistan. These peanuts are characterized by their plump kernels and unique taste profile, making them a favorite for snacking and culinary applications.",
    price: " Price : PKR 250",
},
{
    id: 85,
    imgSrc: '../assets/products/peanuts/p1.png',
    name: "Spanish Peanuts Seeds 250GM ",
    details: " Spanish peanuts, distinguished by their smaller size and red skin, are a popular variety available in Pakistan. These peanuts have a unique flavor profile, often described as slightly sweeter compared to other types. ",
    price: " Price : PKR 550",
},
{
    id: 86,
    imgSrc: '../assets/products/peanuts/p6.png',
    name: "Parachinar Peanuts Seeds 250GM",
    details: "Renowned for their exceptional quality and taste, originate from the fertile lands of Parachinar, a region in Pakistan known for its agricultural prowess. These peanuts are prized for their large size, crunchy texture, and rich flavor, making them highly sought after in local and international markets.",
    price: " Price : PKR 400",
},
{
    id: 87,
    imgSrc: '../assets/products/peanuts/p8.png',
    name: "Valencia Peanuts Seeds 250GM",
    details: " Renowned for their naturally sweet flavor and distinctively small size, are a cherished variety available in Pakistan. These peanuts are characterized by their plump kernels and unique taste profile, making them a favorite for snacking and culinary applications.",
    price: " Price : PKR 550",
},

{
    id: 88,
    imgSrc: '../assets/products/peanuts/p4.png',
    name: " Plain Peanuts Seeds 250GM ",
    details: "Simple yet versatile, are the starting point for countless culinary delights. These seeds, rich in protein, healthy fats, and essential nutrients, offer a wholesome foundation for a wide range of dishes.",
    price: " Price : PKR 300",
},
{
    id: 89,
    imgSrc: '../assets/products/peanuts/p7.png',
    name: "Salted Peanuts seeds 250GM",
    details: "Simple yet versatile, are the starting point for countless culinary delights. These seeds, rich in protein, healthy fats, and essential nutrients, offer a wholesome foundation for a wide range of dishes.",
    price: " Price : PKR 350",
},
{
    id: 90,
    imgSrc: '../assets/products/peanuts/p.7png',
    name: "Salted & Roasted Peanuts Seeds 250GM",
    details: " Simple yet versatile, are the starting point for countless culinary delights. These seeds, rich in protein, healthy fats, and essential nutrients, offer a wholesome foundation for a wide range of dishes.",
    price: " Price : PKR 400",
},
{
    id: 91,
    imgSrc: '../assets/products/peanuts/p4.png',
    name: "Roasted Peanuts Seeds 250GM",
    details: "Simple yet versatile, are the starting point for countless culinary delights. These seeds, rich in protein, healthy fats, and essential nutrients, offer a wholesome foundation for a wide range of dishes.",
    price: " Price : PKR 300",
},
// peanut end

// pine nut start 
{
    id: 92,
    imgSrc: '../assets/products/pinenut/chilgoza-1.png',
    name: "Raw Pine Nut without Shell 250GM",
    details: " Also known as pine nut kernels, offer a delicate and creamy taste experience. These ivory-colored kernels boast a rich, buttery flavor with subtle hints of sweetness. Often enjoyed as a nutritious snack or used as a versatile ingredient in various dishes, raw pine nut kernels add depth and richness to salads, pasta dishes, sauces, and baked goods. ",
    price: " Price : PKR 5,000",
},
{
    id: 93,
    imgSrc: '../assets/products/pinenut/chilgoza-2.png',
    name: "  Afghanistan Fresh Pine Nuts 250GM",
    details: "Afghanistan's fresh pine nuts, revered for their exceptional quality and rich flavor, are a prized delicacy enjoyed by connoisseurs around the world. Harvested from the rugged mountainous regions of Afghanistan, these pine nuts boast a distinctively sweet and buttery taste, with a delicate texture that melts in the mouth. ",
    price: " Price : PKR 5,000",
},
{
    id: 94,
    imgSrc: '../assets/products/pinenut/chilgoza-3.png',
    name: "Bannu Pine Nuts 250GM",
    details: "Pine nuts from Bannu, a region in Khyber Pakhtunkhwa province of Pakistan, are esteemed for their exceptional quality and rich flavor. Harvested from the rugged landscapes of Bannu, these pine nuts boast a delicate yet buttery taste with a subtle sweetness.",
    price: " Price : PKR 4,000",
},
{
    id: 95,
    imgSrc: '../assets/products/pinenut/chilgoza-4.png',
    name: "Best Quality Pine Nuts 250GM ",
    details: "Freshly harvested pine nuts tend to have a superior taste and texture compared to older or stale ones. Look for pine nuts that are recently harvested and have a rich, buttery flavor.",
    price: " Price : PKR 4,500",
},
{
    id: 96,
    imgSrc: '../assets/products/pinenut/Chilgoza-5.png',
    name: "Fresh Organic Pine Nuts250GM ",
    details: "Fresh organic pine nuts are a premium delicacy cherished for their exquisite taste and nutritional benefits. Sourced from pine trees cultivated using organic farming practices, these pine nuts offer a pure and natural taste experience. They are free from synthetic pesticides, herbicides, and chemical fertilizers, making them a wholesome and healthy choice.",
    price: " Price : PKR 6,000",
},
{
    id: 97,
    imgSrc: '../assets/products/pinenut/Chilgoza-3.png',
    name: "Pine Nuts 250GM",
    details: "Normal quality pine nuts, while not as premium as their high-quality counterparts, still offer a delightful taste and texture suitable for various culinary applications. These pine nuts typically come from different regions and may vary slightly in flavor, size, and appearance. While they may not possess the same level of uniformity or richness as top-grade pine nuts, they still provide a pleasant nutty flavor with a creamy texture.",
    price: " Price : PKR 3,500",
},
{
    id: 98,
    imgSrc: '../assets/products/pinenut/Chilgoza-4.png',
    name: "Swat Pine Nuts 250GM",
    details: "Originating from the scenic Swat Valley in Pakistan, are prized for their exceptional quality and rich flavor. Harvested from pine trees indigenous to the region, Swat pine nuts are renowned for their large size, plump kernels, and buttery taste. These nuts are a cherished delicacy enjoyed both locally and internationally for their superior taste and nutritional value.",
    price: " Price : PKR 4,500",
},
{
    id: 99,
    imgSrc: '../assets/products/pinenut/Chilgoza-5.png',
    name: "Gilgit Pine Nuts 250GM ",
    details: "Harvested from the majestic mountains of the Gilgit-Baltistan region in Pakistan, are esteemed for their exceptional quality and exquisite taste. These pine nuts, also known as chilgoza, are renowned for their large size, plump kernels, and rich, buttery flavor. Sourced from the cones of pine trees indigenous to the region, Gilgit pine nuts are meticulously hand-picked and carefully processed to preserve their freshness and natural goodness.",
    price: " Price : PKR 5,500",
},
// pine nut end

// channa start
{
    id: 100,
    imgSrc: '../assets/products/RoastedChanna/chan-1.png',
    name: " Roasted Channa without Skin 250GM",
    details: "Aalso known as skinless roasted chickpeas, are a popular and nutritious snack in Pakistan. Made from dried chickpeas that have had their outer skins removed, these crunchy delights offer a satisfyingly savory flavor with a hint of spice. ",
    price: " Price : PKR 200",
},
{
    id: 101,
    imgSrc: '../assets/products/RoastedChanna/Chana -2.png',
    name: "Roasted Channa Premium 250GM ",
    details: "Also known as roasted chickpeas or roasted gram, are a popular and flavorful snack enjoyed in Pakistan. Made from dried chickpeas that have been seasoned and roasted to perfection, these crunchy treats offer a delightful balance of savory and spicy flavors. ",
    price: " Price : PKR 150",
},
{
    id: 102,
    imgSrc: '../assets/products/RoastedChanna/chana-3.png',
    name: "Large Roasted Channa 250GM ",
    details: "Also known as roasted chickpeas or roasted gram, are a popular and flavorful snack enjoyed in Pakistan. Made from dried chickpeas that have been seasoned and roasted to perfection, these crunchy treats offer a delightful balance of savory and spicy flavors.",
    price: " Price : PKR 130",
},

{
    id: 103,
    imgSrc: '../assets/products/RoastedChanna/chana-4.png',
    name: "Small Roasted Channa 250GM ",
    details: "Also known as roasted chickpeas or roasted gram, are a popular and flavorful snack enjoyed in Pakistan. Made from dried chickpeas that have been seasoned and roasted to perfection, these crunchy treats offer a delightful balance of savory and spicy flavors.",
    price: " Price : PKR 120",
},
// channa end

// offers start
{
    id: 104,
    imgSrc: '../assets/offer-page/off-1.png',
    name: "Australian Dry Fruits Basket",
    details: "An Australian dry fruits basket offers a delightful assortment of dried fruits sourced from the diverse regions of Australia. This unique combination showcases the rich flavors and natural sweetness of fruits grown in the Australian climate. From the sun-kissed orchards of Victoria to the tropical plantations of Queensland, each fruit embodies the essence of Australia's fertile lands",
    price: " Price : PKR 2,000",
},
{
    id: 105,
    imgSrc: '../assets/offer-page/off-2.png',
    name: " American Dry FruitS Basket ",
    details: "An American dry fruits basket is a delightful selection of dried fruits sourced from the diverse regions of the United States. From the orchards of California to the cranberry bogs of Massachusetts, each fruit in this basket embodies the unique flavors and agricultural heritage of America.",
    price: " Price : PKR 2,500",
},
{
    id: 106,
    imgSrc: '../assets/offer-page/off-3.png',
    name: "Pakistani Dry Fruits Basket",
    details: " Reach for the stars with the Prada Cosmic Serenity Wallet. The celestial-inspired design and compact size make it a whimsical addition to your daily essentials. This wallet is a perfect blend of style and cosmic charm.",
    price: " Price : PKR 2,000",
},
{
    id: 107,
    imgSrc: '../assets/offer-page/off-4.png',
    name: "Mixed Dry Fuit Box",
    details: "A mixed dry fruit box is a delightful assortment of various dried fruits, carefully curated to offer a diverse range of flavors, textures, and nutritional benefits. These boxes typically contain a combination of popular dried fruits, providing a tasty and nutritious snack option for various occasions.",
    price: " Price : PKR 3,000",
},
{
    id: 108,
    imgSrc: '../assets/offer-page/off-5.png',
    name: "Premium Mixed Dry Fruit Box",
    details: "A premium mixed dry fruit box elevates the experience of enjoying dried fruits to a luxurious level. Carefully curated with the finest selection of high-quality dried fruits, this box offers a sophisticated and indulgent snacking option for discerning palates.",
    price: " Price : PKR 4,000",
},
{
    id: 109,
    imgSrc: '../assets/offer-page/off-6.png',
    name: "American Mixed Dry Fruit Box",
    details: "Become a muse of fashion with the Prada Mosaic Muse Tote. The mosaic-inspired design and spacious interior make it a practical yet stylish choice. This tote is a work of art for the modern woma",
    price: " Price : PKR 4,000",
},
{
    id: 110,
    imgSrc: '../assets/offer-page/off-7.png',
    name: " Irani Mixed Dry Fruit Box",
    details: "An Irani mixed dry fruit box is a luxurious assortment of dried fruits that showcases the exquisite flavors and premium quality for which Iranian dried fruits are renowned. Iran, with its fertile lands and favorable climate, produces some of the finest dried fruits in the world, prized for their exceptional taste, texture, and nutritional value.",
    price: " Price : PKR 3,500",
},
{
    id: 111,
    imgSrc: '../assets/offer-page/off-8.png',
    name: "Swat Famous Dry Fruit Basket",
    details: "A Swat famous dry fruit basket embodies the rich flavors and cultural heritage of the Swat Valley, a picturesque region nestled in the mountains of Khyber Pakhtunkhwa province in Pakistan. Renowned for its stunning natural beauty and fertile lands, Swat is also celebrated for its delicious dried fruits, which are cherished both locally and internationally.",
    price: " Price : PKR 2,500",
},

// offer end

]


getTrainerData();

function getTrainerData() {

    let id = getId();

    if (id == null) {
        id = 1;
    }

    trainerData.map((item) => {
        if (item.id == id) {
            document.getElementById('productImg').src = item.imgSrc;
            document.getElementById('name').innerText = item.name;
            document.getElementById('details').innerText = item.details;
            document.getElementById('price').innerText = item.price;
        }
    })

}