<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import WFUserMPickupViewBase from './wfuser-mpickup-view-base.vue';

import view_pickupviewpanel from '@widgets/wfuser/mpickup-viewpickupviewpanel-pickupviewpanel/mpickup-viewpickupviewpanel-pickupviewpanel.vue';
@Component({
    components: {
        view_pickupviewpanel, 
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
export default class WFUserMPickupView extends WFUserMPickupViewBase {

}
</script>