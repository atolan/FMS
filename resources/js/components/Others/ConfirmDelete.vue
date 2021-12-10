<template>
    <PopupWrapper name="confirm-delete">

        <!--Title-->
        <PopupHeader title="Delete Permanently" icon="edit" />

        <!--Content-->
        <PopupContent>

            <!--Form to set sharing-->
            <ValidationObserver tag="form" class="form-wrapper">
                <ValidationProvider tag="div" mode="passive" style="margin-top: 30px; margin-bottom:20px; text-align: center;" rules="required" v-slot="{ errors }">
                    <label class="input-label">Do you want to delete this file permanently?</label>
                </ValidationProvider>
            </ValidationObserver>
        </PopupContent>

        <!--Actions-->
        <PopupActions>
            <ButtonBase
                    class="popup-button"
                    @click.native="permanentlyDelete"
                    button-style="theme"
            >Yes</ButtonBase>            
            <ButtonBase
                    class="popup-button"
                    @click.native="$closePopup()"
                    button-style="secondary"
            >No</ButtonBase>
        </PopupActions>
    </PopupWrapper>
</template>

<script>
    import {ValidationProvider, ValidationObserver} from 'vee-validate/dist/vee-validate.full'
    import PopupWrapper from '@/components/Others/Popup/PopupWrapper'
    import PopupActions from '@/components/Others/Popup/PopupActions'
    import PopupContent from '@/components/Others/Popup/PopupContent'
    import PopupHeader from '@/components/Others/Popup/PopupHeader'
    import ThumbnailItem from '@/components/Others/ThumbnailItem'
    import ActionButton from '@/components/Others/ActionButton'
    import ButtonBase from '@/components/FilesView/ButtonBase'
    import {required} from 'vee-validate/dist/rules'
    import {events} from '@/bus'
    import axios from 'axios'
    import {mapGetters} from 'vuex'

    export default {
        name: 'ConfirmDelete',
        components: {
            ValidationProvider,
            ValidationObserver,
            ThumbnailItem,
            ActionButton,
            PopupWrapper,
            PopupActions,
            PopupContent,
            PopupHeader,
            ButtonBase,
            required,
        },
        computed: {
            ...mapGetters([
                'fileInfoDetail',
                'data',
            ])
        },
        data() {
            return {
                name: undefined,
            }
        },
        methods: {
            permanentlyDelete() {
                this.$store.dispatch('deleteItem', true)
                this.data['IS_SHOW_CONFIRM_DELETE'] = false
                this.$closePopup()
            },
        },
        mounted() {
            // Show popup
            events.$on('popup:open', args => {
                if (args.name !== 'confirm-delete') return
                this.data['IS_SHOW_CONFIRM_DELETE'] = true
            })
        }
    }
</script>
