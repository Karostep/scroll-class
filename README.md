For using universal scroll class you need:

    1.download JS file.
    2.connect to JS file from HTML with type module.
    3.import class to your main JS file.

Class call example:

    new Scroll(document.querySelectorAll(".cart"),document.querySelector(".maincol"),document.querySelector(".leftbut"),document.querySelector(".rightbut"));
    
HTML code example:

     <body>
        <div class="mainrow">
            <div class="butdiv">
                <div class="cartdiv">
                    <button class="leftbut buts">left</button>
                    <button class="rightbut buts">right</button>
                </div>
            </div>
            <div class="maincol">
                <div class="cart">
                    <div class="imagediv">
                        <img src="https://support.heberjahiz.com/hc/article_attachments/21013076295570" alt="">    
                    </div>
                    <div class="info">
                        <h1>Name</h1>             
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolor id ab voluptatem! Perspiciatis, obcaecati facilis! Earum ad, commodi explicabo culpa amet dolores repellat est fuga aliquid velit eveniet placeat.</p>
                        <p>9.99$</p>
                    </div>
                </div>
                <div class="cart">
                    <div class="imagediv">
                        <img src="https://support.heberjahiz.com/hc/article_attachments/21013076295570" alt="">    
                    </div>
                    <div class="info">
                        <h1>Name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolor id ab voluptatem! Perspiciatis, obcaecati facilis! Earum ad, commodi explicabo culpa amet dolores repellat est fuga aliquid velit eveniet placeat.</p>
                        <p>9.99$</p>    
                    </div>
                </div>
                <div class="cart">
                    <div class="imagediv">
                        <img src="https://support.heberjahiz.com/hc/article_attachments/21013076295570" alt="">    
                    </div>
                    <div class="info">
                        <h1>Name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolor id ab voluptatem! Perspiciatis, obcaecati facilis! Earum ad, commodi explicabo culpa amet dolores repellat est fuga aliquid velit eveniet placeat.</p>
                        <p>9.99$</p>
                    </div>
                </div>
                ...
            </div>
        </div>
        <script src="scroll.js"></script>
    </body>


CSS code example:

    body{
        overflow-x: hidden;
    }
    .mainrow{
        position: relative;
    }
    .maincol{
        display: flex;
        z-index: 10;
        flex-shrink: 1;
        transition: 0.5s;
    }
    .cart{
        padding: 0px 10px;
        box-sizing: border-box;
        z-index: 20;
        background: white;
        transition: 0.5s;
        min-width: 33.3%;
        border:1px solid;
    }
    .cart:nth-child(2){
        z-index: 30;
        transform: scale(1.1);
    }
    .imagediv{
        height: 60%;
    }
    img{
        width: 100%;
        height: 100%;
    }
    .butdiv{
        justify-content: center;
        display: flex;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .cartdiv{
        position: relative;
        z-index: 60;
        width: 33.3%;
        height: 100%;
    }
    .buts{
        position: absolute;
        z-index: 100;
        pointer-events: all;
        top: 50%;
        border: 1px solid;
        background: white;
    }
    .leftbut{
        left: -2.5%;
    }
    .rightbut{
        right: -2.5%;
    }
