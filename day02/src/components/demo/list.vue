<template>
    <div>
        <div>
        <mt-navbar v-model="active">
            <mt-tab-item id="1">HTML5</mt-tab-item>
            <mt-tab-item id="2">CSS3</mt-tab-item>
            <mt-tab-item id="3">JavaScript</mt-tab-item>
            <mt-tab-item id="4">jQuery</mt-tab-item>
        </mt-navbar>
        </div>
        <div>
            <mt-tab-container v-model="active">
                <mt-tab-container-item id="1">
                    <p>1234</p>
                </mt-tab-container-item>
                 <mt-tab-container-item id="2">
                    <p>5678</p>
                </mt-tab-container-item>
                 <mt-tab-container-item id="3">
                    <p>abcd</p>
                </mt-tab-container-item>
                 <mt-tab-container-item id="4">
                    <p>efgh</p>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:1
        }
    }
}
</script>

    
