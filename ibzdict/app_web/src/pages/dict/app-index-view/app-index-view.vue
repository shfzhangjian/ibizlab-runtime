<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import AppIndexViewBase from './app-index-view-base.vue';

import view_appmenu from '@widgets/app/app-index-view-appmenu/app-index-view-appmenu.vue';
@Component({
    components: {
        view_appmenu, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            if(!Object.is(vm.navModel,"route")){
                vm.initNavDataWithTab(vm.viewCacheData);
            }
            vm.$store.commit('addCurPageViewtag', { fullPath: to.fullPath, viewtag: vm.viewtag });
        });
    },
})
export default class AppIndexView extends AppIndexViewBase {

}
</script>