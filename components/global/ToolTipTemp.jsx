import {Snippet} from "@nextui-org/react";

 const ToolTipTemp = ({symbol, content, disableAnimation, placement, closeDelay, SnippetText}) => {
  return (
    <Snippet symbol={symbol}
          tooltipProps={{
        color: "foreground",
        content: content,
        disableAnimation: disableAnimation,
        placement: placement,
        closeDelay: closeDelay
        }}
          className='text-gray-100' variant="bordered" size="sm" color="default">{SnippetText}</Snippet>
  )
}
export default ToolTipTemp