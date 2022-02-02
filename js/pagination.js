//Объект пагинации
const Pagination = {
    page: 1,
    min: 1,
    max: 2,
    setMax(max){
        this.max = max;
    },
    previousPage(){
        if(this.page != this.min)
        this.page--;
    },
    nextPage(){
        if(this.page != this.max)
        this.page++;
    },
    setPage(num){
        if(num < this.min)
            this.page = this.min;
        else if(num > this.max)
            this.page = this.max;
        else
        this.page = num;
    },
}

