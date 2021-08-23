import { h } from 'preact'
import { render } from './base'
import { Gallery } from './gallery'
import { MainPage } from './main'
import { Overview } from './overview'

//render(() => <Overview />, "overview.html", "overview")
//render(() => <Gallery />, "gallery.html", "gallery")
render(() => <MainPage />, "index.html", "main")
