// pages/sofas.js
"use client";
import React, { useState } from 'react';
import Sofa from '@/Components/Sofa';
import Categories from '@/Components/Categories';

const sofasData = [
    { id: 1, name: 'Sofa 1', category: 'Fabric', price: '$500', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/rq6jlb6miocjw0p2jnzj.webp' },
    { id: 2, name: 'Sofa 2', category: 'Fabric', price: '$500', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/cqftsk51nynrekacmaji.webp' },
    { id: 3, name: 'Sofa 3', category: 'Fabric', price: '$500', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636832/website%20assets/fabric%20sofa/bj6yrv9vlmbq0mnxd6cb.webp' },
    { id: 4, name: 'Sofa 4', category: 'Fabric', price: '$500', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636831/website%20assets/fabric%20sofa/wvkjwcxmgvphk6nlenbz.webp' },
    { id: 5, name: 'Sofa 5', category: 'Fabric', price: '$500', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636831/website%20assets/fabric%20sofa/moqyungqe0jv4spzpcll.webp' },
    { id: 6, name: 'Sofa 6', category: 'Fabric', price: '$500', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636831/website%20assets/fabric%20sofa/oeqeqsqthjiiiwg0svxd.webp' },
    { id: 7, name: 'Sofa 7', category: 'Fabric', price: '$500', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636831/website%20assets/fabric%20sofa/uwfqfgiw4wmsa3wjz1ov.webp' },
    { id: 8, name: 'Sofa 8', category: 'Fabric', price: '$500', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636830/website%20assets/fabric%20sofa/efyczmivhycxudi43sds.webp' },
    { id: 9, name: 'Sofa 9', category: 'Fabric', price: '$500', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636830/website%20assets/fabric%20sofa/dguqhhsrfhwqwi7p3dcf.webp' },
    { id: 10, name: 'Sofa 10', category: 'Fabric', price: '$500', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636830/website%20assets/fabric%20sofa/vfu42m9bhgxxln9vkidt.webp' },
    { id: 11, name: 'Sofa 11', category: 'Fabric', price: '$500', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636830/website%20assets/fabric%20sofa/uzblcqveksmwuikulb1n.webp' },
    { id: 12, name: 'Sofa 1', category: 'Wooden', price: '$700', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636864/website%20assets/wooden%20sofa/irkwcbdeo8txaqwjzj91.webp' },
    { id: 13, name: 'Sofa 2', category: 'Wooden', price: '$700', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636864/website%20assets/wooden%20sofa/rsjdo00qoolzwwlq4v02.webp' },
    { id: 14, name: 'Sofa 3', category: 'Wooden', price: '$700', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636865/website%20assets/wooden%20sofa/hho74oaoxuar65c7v5c3.webp' },
    { id: 15, name: 'Sofa 4', category: 'Wooden', price: '$700', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636865/website%20assets/wooden%20sofa/pn5neghgckc6bnfkkgtk.webp' },
    { id: 16, name: 'Sofa 5', category: 'Wooden', price: '$700', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636865/website%20assets/wooden%20sofa/wcyyh6lbm2edamxzurvb.webp' },
    { id: 17, name: 'Sofa 6', category: 'Wooden', price: '$700', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636866/website%20assets/wooden%20sofa/qcxc5momkzkxhprcsoaw.webp' },
    { id: 18, name: 'Sofa 7', category: 'Wooden', price: '$700', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636866/website%20assets/wooden%20sofa/ybmj9of8auaqfey1cdd6.webp' },
    { id: 19, name: 'Sofa 1', category: 'Leatherette', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636843/website%20assets/leatherette%20sofa/dq5k0ocxcc5c3xbkh0d3.webp' },
    { id: 20, name: 'Sofa 2', category: 'Leatherette', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636843/website%20assets/leatherette%20sofa/oud2d2o97cnnjr3cec8e.webp' },
    { id: 21, name: 'Sofa 3', category: 'Leatherette', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636844/website%20assets/leatherette%20sofa/q3qiluvuurt0ifm0dmiw.webp' },
    { id: 22, name: 'Sofa 4', category: 'Leatherette', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636844/website%20assets/leatherette%20sofa/faymmhvbnvinmdulw7yq.webp' },
    { id: 23, name: 'Sofa 5', category: 'Leatherette', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636844/website%20assets/leatherette%20sofa/ex7nsnt2zs0hfde0flg1.webp' },
    { id: 24, name: 'Sofa 6', category: 'Leatherette', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636844/website%20assets/leatherette%20sofa/cys5cm17eyqmjsyxd8du.webp' },
    { id: 25, name: 'Sofa 7', category: 'Leatherette', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636845/website%20assets/leatherette%20sofa/u1yblzo04ibehvantjbn.webp' },
    { id: 26, name: 'Sofa 8', category: 'Leatherette', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636845/website%20assets/leatherette%20sofa/gtqlgvzmqupqdqc4no1d.webp' },
    { id: 27, name: 'Sofa 1', category: 'Leather', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636837/website%20assets/leather%20sofa/xf5otfqo5lvbttgwx7hh.webp' },
    { id: 28, name: 'Sofa 2', category: 'Leather', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636837/website%20assets/leather%20sofa/buowh2hdx5adeonjibv3.webp' },
    { id: 29, name: 'Sofa 3', category: 'Leather', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636837/website%20assets/leather%20sofa/eemwoeh9tnlhcuvb4kno.webp' },
    { id: 30, name: 'Sofa 4', category: 'Leather', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/owe3j4cgenrjkrrhhwux.webp' },
    { id: 31, name: 'Sofa 5', category: 'Leather', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/iz3mewiuhztgqf1hyvmx.webp' },
    { id: 32, name: 'Sofa 6', category: 'Leather', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636839/website%20assets/leather%20sofa/kkwdsq3plgbplk9nd9sh.webp' },
    { id: 33, name: 'Sofa 7', category: 'Leather', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/arev9svx7suihpazdnav.webp' },
    { id: 34, name: 'Sofa 8', category: 'Leather', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636839/website%20assets/leather%20sofa/zmbkfzxwxoksf7nglifh.webp' },
    { id: 35, name: 'Sofa 9', category: 'Leather', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/hlyx2rfvqjlh8u0uayim.webp' },
    { id: 36, name: 'Sofa 10', category: 'Leather', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636838/website%20assets/leather%20sofa/eyxvedtyk3upoqhpifhi.webp' },
    { id: 37, name: 'Sofa 1', category: 'Sofa Bed', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636859/website%20assets/sofacumbed/j5i3ymylfudkbextcww9.webp' },
    { id: 38, name: 'Sofa 2', category: 'Sofa Bed', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636859/website%20assets/sofacumbed/egjpjnbvfl3afta8txdv.webp' },
    { id: 39, name: 'Sofa 3', category: 'Sofa Bed', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636859/website%20assets/sofacumbed/cmqqieoyydo2x5ydmbek.webp' },
    { id: 40, name: 'Sofa 4', category: 'Sofa Bed', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636859/website%20assets/sofacumbed/ryecg4bazih02hp27atl.webp' },
    { id: 41, name: 'Sofa 5', category: 'Sofa Bed', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636860/website%20assets/sofacumbed/uybmjc8wpsfuwahusymd.webp' },
    { id: 42, name: 'Sofa 1', category: 'Sofa Set', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636853/website%20assets/sofa%20set/zmhfx18omex1ek6a2tm5.webp' },
    { id: 43, name: 'Sofa 2', category: 'Sofa Set', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636854/website%20assets/sofa%20set/mvefkg4irsxqaghaq6og.webp' },
    { id: 44, name: 'Sofa 3', category: 'Sofa Set', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636854/website%20assets/sofa%20set/qatl1ebbufza7ofcbghj.webp' },
    { id: 45, name: 'Sofa 4', category: 'Sofa Set', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636854/website%20assets/sofa%20set/zl9qdi6urrakkouwp353.webp' },
    { id: 46, name: 'Sofa 5', category: 'Sofa Set', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636854/website%20assets/sofa%20set/hxhtq7vvrdm3dpcf1cwi.webp' },
    { id: 47, name: 'Sofa 6', category: 'Sofa Set', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636855/website%20assets/sofa%20set/ir7vbzdzu20hmf3sud81.webp' },
    { id: 48, name: 'Sofa 7', category: 'Sofa Set', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636855/website%20assets/sofa%20set/qohwdvrditixv2gqzmq6.webp' },
    { id: 49, name: 'Sofa 8', category: 'Sofa Set', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636855/website%20assets/sofa%20set/ovuy954wwagzfcnu7w9w.webp' },
    { id: 50, name: 'Sofa 9', category: 'Sofa Set', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636856/website%20assets/sofa%20set/xxznhib6lmhdxpl0hesk.webp' },
    { id: 51, name: 'Sofa 1', category: 'Corner Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/nnkjvzqglpmlkvcfh1t9.webp' },
    { id: 52, name: 'Sofa 2', category: 'Corner Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/q82fhlbgrd3sgwax09ht.webp' },
    { id: 53, name: 'Sofa 3', category: 'Corner Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/uvyvdvzdsr5raabwwwhu.webp' },
    { id: 54, name: 'Sofa 4', category: 'Corner Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/swu84syetdxwssazat4y.webp' },
    { id: 55, name: 'Sofa 5', category: 'Corner Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/k7ooj8iksdo5bxmbvxgh.webp' },
    { id: 56, name: 'Sofa 6', category: 'Corner Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636825/website%20assets/corner%20sofa/jvsfesay2fv0pi4l3fx7.webp' },
    { id: 57, name: 'Sofa 7', category: 'Corner Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636825/website%20assets/corner%20sofa/eynhyvtmq1k8smbnhnry.webp' },
    { id: 58, name: 'Sofa 8', category: 'Corner Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636824/website%20assets/corner%20sofa/sxetxn3bmdeb6ii65qx9.webp' },
    { id: 59, name: 'Sofa 9', category: 'Corner Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636825/website%20assets/corner%20sofa/r3garkledzctlweb3oex.webp' },
    { id: 60, name: 'Sofa 1', category: 'Premium Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636850/website%20assets/premium%20sofa/eggk9uoxp464ekepcham.webp' },
    { id: 61, name: 'Sofa 2', category: 'Premium Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636849/website%20assets/premium%20sofa/rmain7ppevfnemcicp1q.webp' },
    { id: 62, name: 'Sofa 3', category: 'Premium Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636850/website%20assets/premium%20sofa/cuoeygtimbhsbwso7dx2.webp' },
    { id: 63, name: 'Sofa 4', category: 'Premium Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636849/website%20assets/premium%20sofa/xrcgzouwtzhjmxtyb1qu.webp' },
    { id: 64, name: 'Sofa 5', category: 'Premium Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636849/website%20assets/premium%20sofa/lxhpc0wvlynik4d2mfyq.webp' },
    { id: 65, name: 'Sofa 6', category: 'Premium Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636849/website%20assets/premium%20sofa/lsqarfb2ntcebd9ovbb7.webp' },
    { id: 66, name: 'Sofa 7', category: 'Premium Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636848/website%20assets/premium%20sofa/zu3zrksbtskxhjdwcozp.webp' },
    { id: 67, name: 'Sofa 8', category: 'Premium Sofa', price: '$600', imageUrl: 'https://res.cloudinary.com/dg38njbya/image/upload/v1716636848/website%20assets/premium%20sofa/dphxjo7swhdu6i3sa0nd.webp' },
    // Add more sofa data here
];

const SofasPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category: React.SetStateAction<string>) => {
        setSelectedCategory(category);
        console.log(category);
    };

    return (
        <div className="max-w-full mx-auto mt-8 p-10 bg-white text-black">
            <h1 className="text-2xl font-semibold mb-4 text-center">All Sofas</h1>
            <Categories onSelectCategory={handleCategoryChange} />
            <div className="mb-4 text-center">
                <label className="mr-2">Filter by Category:</label>
                <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory} className="w-fit p-2 border border-gray-300 rounded">
                <option value="All">All</option>
                    <option value="Fabric">Fabric</option>
                    <option value="Wooden">Wooden</option>
                    <option value="Leatherette">Leatherette</option>
                    <option value="Leather">Leather</option>
                    <option value="Sofa Bed">Sofa Bed</option>
                    <option value="Sofa Set">Sofa Set</option>
                    <option value="Corner Sofa">Corner Sofa</option>
                    <option value="Premium Sofa">Premium Sofa</option>
                </select>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {sofasData
                    .filter((sofa) => selectedCategory === 'All' || sofa.category === selectedCategory)
                    .map((sofa) => (
                        <Sofa key={sofa.id} {...sofa} />
                    ))}
            </div>
        </div>
    );
};

export default SofasPage;


