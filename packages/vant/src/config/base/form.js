import {localeOptions} from '../../utils';

export default function form({t}) {
    return [
        {
            type: 'input',
            field: '>formName',
            value: '',
            title: t('form.formName'),
        }, {
            type: 'select',
            field: 'labelAlign',
            title: t('form.labelAlign'),
            options: localeOptions(t, [
                {
                    label: 'center',
                    value: 'center',
                },
                {
                    label: 'left',
                    value: 'left',
                },
                {
                    label: 'right',
                    value: 'right',
                },
                {
                    label: 'top',
                    value: 'top',
                },
            ])
        }, {
            type: 'radio',
            field: 'inputAlign',
            title: t('form.inputAlign'),
            options: localeOptions(t, [
                {
                    label: 'left',
                    value: 'left',
                },
                {
                    label: 'center',
                    value: 'center',
                },
                {
                    label: 'right',
                    value: 'right',
                },
            ])
        },
        {
            type: 'SizeInput',
            field: 'labelWidth',
            title: t('form.labelWidth'),
        },
        {
            type: 'switch',
            field: 'colon',
            title: t('form.colon'),
        }, {
            type: 'switch',
            field: '_submitBtn>show',
            value: true,
            title: t('form.submitBtn'),
        }, {
            type: 'switch',
            field: '_resetBtn>show',
            value: false,
            title: t('form.resetBtn'),
        }, {
            type: 'FnConfig',
            field: '>_event',
            info: {
                type: 'tooltip',
                native: true,
                effect: 'light',
                align: 'left',
                content: t('form.document') + '：<a target="_blank" href="https://form-create.com/v3/guide/global-event">https://form-create.com/v3/guide/global-event</a>',
                rawContent: true,
            },
            value: {},
            col: {show: true},
            props: {
                eventConfig: [
                    {
                        name: 'onSubmit',
                        info: t('form.onSubmit'),
                        args: ['formData', 'api'],
                    },
                    {
                        name: 'onCreated',
                        info: t('form.onCreated'),
                        args: ['api'],
                    },
                    {
                        name: 'onMounted',
                        info: t('form.onMounted'),
                        args: ['api'],
                    },
                    {
                        name: 'onChange',
                        info: t('form.onChange'),
                        args: ['field', 'value', 'options'],
                    },
                    {
                        name: 'beforeFetch',
                        info: t('form.beforeFetch'),
                        args: ['config', 'data'],
                    },
                ]
            },
            title: t('form.event'),
        },
    ];
}