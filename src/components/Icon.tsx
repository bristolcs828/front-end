import React from 'react';
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => { requireContext.keys().forEach(requireContext) }
try { requireAll(require.context('../icons', true, /\.svg$/)); } catch (error) { console.log(error); }


type Props = {
    name?: string;
    noClass?: Boolean;
}
const Component = (props: Props) => {

    return (
        <svg className={props.noClass ? 'badge' : 'icon'}>
            {props.name && <use xlinkHref={'#' + props.name} />}
        </svg>
    )
}

export default Component;