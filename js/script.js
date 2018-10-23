document.addEventListener("DOMContentLoaded", function () {

    const QuotesSlider = function (quotesContainerSelector) {
        this.container = document.querySelector(quotesContainerSelector);
        this.quotes = this.container.querySelectorAll(".quote");
        this.activeQuote = this.container.querySelector(".quote-active");
        this.leftArrow = this.container.querySelector(".left-arrow");
        this.rightArrow = this.container.querySelector(".right-arrow");

        this.onArrowClick = function (isLeft) {
            let newActiveQuote = null;

            if (isLeft) { // next quote
                if (this.activeQuote.nextElementSibling.classList.contains("quote"))
                    newActiveQuote = this.activeQuote.nextElementSibling;
                else
                    newActiveQuote = this.quotes[0];
                this.activeQuote.classList.add("quote--left");
            } else { // previous quote
                if (this.activeQuote.previousElementSibling.classList.contains("quote"))
                    newActiveQuote = this.activeQuote.previousElementSibling;
                else
                    newActiveQuote = this.quotes[this.quotes.length - 1];
                this.activeQuote.classList.add("quote--right");
            }

            this.activeQuote.classList.remove("quote-active");
            
            setTimeout(function () {
                this.activeQuote.classList.add("quote-invisible");
                newActiveQuote.classList.remove("quote-invisible");
                newActiveQuote.classList.add("quote-active");
                this.activeQuote.classList.remove("quote--left", "quote--right");
                this.activeQuote = newActiveQuote;
            }.bind(this), 300);
        }

        this.registerArrowsClickListeners = function () {

            this.leftArrow.addEventListener("click", function () {
                this.onArrowClick(true);
            }.bind(this));

            this.rightArrow.addEventListener("click", function () {
                this.onArrowClick(false);
            }.bind(this));
        };

        this.init = function () {
            this.registerArrowsClickListeners();
        };
    };



    let slider = new QuotesSlider(".quotes-container");
    slider.init();

});
