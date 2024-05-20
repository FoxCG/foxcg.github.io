const jsonUrl = 'portfolio.json';
const imageBasePath = 'components/assets/renders/'; 

async function fetchPortfolioData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        displayPortfolio(data);
    } catch (error) {
        console.error('Error fetching the portfolio data:', error);
    }
}

function displayPortfolio(portfolio) {
    const container = document.getElementById('portfolioContainer');

    for (const [title, fileName] of Object.entries(portfolio)) {
        const imageUrl = `${imageBasePath}${fileName}`;

        const galleryCard = document.createElement('div');
        galleryCard.className = 'gallery-card3-gallery-card gallery-card3-root-class-name';

        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = title;
        imgElement.className = 'gallery-card3-image';
        imgElement.loading = 'eager';

        const cardContainer = document.createElement('div');
        cardContainer.className = 'gallery-card3-container';

        galleryCard.appendChild(imgElement);
        galleryCard.appendChild(cardContainer);
        container.appendChild(galleryCard);
    }
}

fetchPortfolioData(jsonUrl);
