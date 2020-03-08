<template>
    <div>
        <div class="search-container" style="display: flex;align-items: center">
            <div style="margin-left: 16px" class="_h6ib8e">
                <svg  viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style="height:16px;width:16px;display:block;fill:#484848;font-weight: 300"><path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>
            </div>
            <span class="_1pvdneq">搜「北京」试试</span>

        </div>
        <div class="fixed-search" style="position: fixed;top:0;width: 100%;background-color: white;padding: 15px 0;display: none">
            <div style="display: flex;height:40px;align-items: center;width: 88%;margin: 0 auto;padding: 5px 0;box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.01), 0px 3px 18px rgba(0, 0, 0, 0.12) !important">
                <div style="padding: 5px 10px 5px 18px" class="_h6ib8e">
                    <svg  viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style="height:16px;width:16px;display:block;fill:#484848;font-weight: 300"><path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>
                </div>
                <span class="_1pvdneq">搜「北京」试试</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndexSearching",
        methods:{
            debounce(fn,delay){
                let time;
                return function () {
                    let context = this;
                    let args = arguments;
                    if(time){
                        clearTimeout(time)
                    }
                    time = setTimeout(() => fn.apply(context,args),delay)
                }
            },
            handleScroll(){
                function changeTab(){
                    let searchBar = document.querySelector('.search-container')
                    let fixedBar = document.querySelector('.fixed-search')
                    const barToTop = searchBar.offsetTop

                    if(document.documentElement.scrollTop > barToTop){
                        fixedBar.style.display = 'block'
                    }else{
                        fixedBar.style.display = 'none'
                    }
                }
                window.addEventListener('scroll',changeTab)
            }
        },
        mounted() {
            this.handleScroll()
        }
    }
</script>

<style scoped>
    span{
        margin-left: 6px;
        color: darkgrey;
        font-weight: 300;
        line-height: 48px;
        font-size: 15px;
    }

    .search-container{
        width: 90%;
        left: 5%;
        height: 48px;
        background-color: white;
        box-shadow: 0 10px 10px #efefef;
        margin: -24px auto;
        border-radius: 4px;
        position: absolute;
    }
</style>
