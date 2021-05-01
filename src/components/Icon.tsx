import React from 'react';
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => { requireContext.keys().forEach(requireContext) }
try { requireAll(require.context('../icons', true, /\.svg$/)); } catch (error) { console.log(error); }


type Props = {
    name?: string;
}
const Component = (props: Props) => {

    return (
        <svg className='icon'>
            {props.name && <use xlinkHref={'#' + props.name} />}
        </svg>
    )
}

export default Component;