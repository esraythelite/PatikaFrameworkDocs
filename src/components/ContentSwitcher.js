import React from 'react'
import ContentCard from './ContentCard'
import Highlighter from './Highlighter' 
import ImageItems from './ImageItems'

const ContentSwitcher = ({ content }) => {
    return (
        <>
            {content.type === 'code' &&
                <Highlighter key={content.order} item={content} />}
            {content.type === 'img' &&
                <ImageItems key={content.order} data={content} />}
            {content.type === 'text' &&
                <ContentCard key={content.order} data={content} />}
        </>
    )
}

export default ContentSwitcher
