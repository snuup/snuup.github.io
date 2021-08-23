import { Fragment, h } from 'preact'
import { Gallery } from './gallery'
import { Overview } from './overview'

export let MainPage = () => {
    return (
        <Fragment>
            <Gallery />
            <Overview />
        </Fragment>
    )
}
