document.addEventListener('DOMContentLoaded', function () {
    const recommendations = {
        beaches: [
            { name: "Malibu Beach", img: "images/malibu.jpg" },
            { name: "Copacabana Beach", img: "images/copacabana.jpg" }
        ],
        temples: [
            { name: "Angkor Wat", img: "images/angkorwat.jpg" },
            { name: "Golden Temple", img: "images/goldentemple.jpg" }
        ],
        countries: [
            { name: "Thailand", img: "images/thailand.jpg" },
            { name: "Italy", img: "images/italy.jpg" }
        ]
    };

    function displayRecommendations(type) {
        const container = document.getElementById('recommendations');
        recommendations[type].forEach(rec => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${rec.name}</h3><img src="${rec.img}" alt="${rec.name}" style="width:200px;height:auto;">`;
            container.appendChild(div);
        });
    }

    // Display recommendations on the home page
    displayRecommendations('beaches');
    displayRecommendations('temples');
    displayRecommendations('countries');
});
