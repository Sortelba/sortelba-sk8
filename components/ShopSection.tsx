import React, { useEffect } from 'react';

// Define the shape of the config object on the window for TypeScript
declare global {
  interface Window {
    spread_shop_config?: {
      shopName: string;
      locale: string;
      prefix: string;
      baseId: string;
    };
  }
}

const ShopSection: React.FC = () => {
    useEffect(() => {
        // Always set the configuration. The script will use this global object when it loads.
        window.spread_shop_config = {
            shopName: 'sortelba',
            locale: 'de_DE',
            prefix: 'https://sortelba.myspreadshop.de',
            baseId: 'myShop'
        };
        
        // Check if the script has already been added to the page.
        // If so, do not add it again. This makes the component safe to unmount and re-mount,
        // which can happen in React's Strict Mode.
        if (document.getElementById('spreadshop-script')) {
            return;
        }

        // Create the script element
        const script = document.createElement('script');
        script.id = 'spreadshop-script';
        script.type = 'text/javascript';
        script.src = 'https://sortelba.myspreadshop.de/shopfiles/shopclient/shopclient.nocache.js';
        script.defer = true;

        // Append the script to the body to load and execute it
        document.body.appendChild(script);

        // We are intentionally not returning a cleanup function.
        // The Spreadshirt script is not designed to be loaded and unloaded dynamically.
        // This approach ensures it's loaded once and stays for the lifetime of the page,
        // mirroring a standard HTML script tag and providing stability.
    }, []); // The empty dependency array ensures this effect runs only on the component's initial mount.

    return (
        <div id="myShop" className="h-full">
            <a href="https://sortelba.myspreadshop.de">sortelba</a>
        </div>
    );
};

export default ShopSection;