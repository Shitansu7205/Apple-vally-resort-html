document.addEventListener("DOMContentLoaded", function () {

    // Create Button
    const button = document.createElement("a");
    button.href = "index.html#why-book-direct"; // Change to your page URL
    button.textContent = "Why Book Direct?";
    button.className = "why-book-direct-btn";

    document.body.appendChild(button);

    // Create CSS
    const style = document.createElement("style");
    style.textContent = `
        .why-book-direct-btn{
            position:fixed;
            top:50%;
            right:-60px;
            transform:translateY(-50%) rotate(-90deg);
            background:#6d7c6a;
            color:#fff;
            padding:12px 25px;
            text-decoration:none;
            font-size:15px;
            font-weight:600;
            font-family:Arial,sans-serif;
            border-radius:8px 8px 0 0;
            box-shadow:0 4px 12px rgba(0,0,0,.25);
            z-index:999999;
            transition:.3s ease;
            cursor:pointer;
        }

        .why-book-direct-btn:hover{
            right:-42px;
            background:#5b6958;
            color:#fff;
        }

        @media (max-width:768px){
            .why-book-direct-btn{
                right:-58px;
                padding:10px 18px;
                font-size:13px;
            }
        }
    `;

    document.head.appendChild(style);

});