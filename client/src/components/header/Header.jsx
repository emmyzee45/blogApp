import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
            // src="https://thumbs.dreamstime.com/z/small-white-flowers-convolvulus-close-up-sun-154056231.jpg"
            src="https://media.gettyimages.com/photos/closeup-of-white-flower-picture-id978444614?s=170667a"
            // src="https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?h=1000&w=1500&fit=crop&mark=https:%2F%2Fassets.imgix.net%2F~text%3Ftxtclr%3Dfff%26txt%3DFree+Flower+Wallpaper+Photos%26txtsize%3D120%26txtpad%3D20%26bg%3D80000000%26txtfont%3DAvenir-Heavy%26txtalign%3Dcenter%26w%3D1300&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtsize=60&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10" 
            alt="" 
            className="headerImg" 
        />
    </div>
  )
}
