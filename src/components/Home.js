import React from 'react'
import { CiSettings } from 'react-icons/ci'
import { IoHomeOutline } from 'react-icons/io5'
import { PiSignOutDuotone } from 'react-icons/pi'

const Home = () => {
  return (
    <div>
        <div className='chat-feed-container'>
            <h1 className='chat'>Chat / Feed chat</h1>

            <div className='Details'>
                <div className='owner-card'>
                    <IoHomeOutline className='icons' size={24} />
                    <button className='owner'>Process Owner HOD</button>
                </div>
            <div className='Admin'>
                    <button className='admin-button'>Admin</button>
                    <p>Palak Bansal</p>
                    <img src='https://s3-alpha-sig.figma.com/img/28d1/418c/98ac8b5440b32e95a31a25f0b7d349ac?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ph8qsfchd8kUORZ2Ynl5BwkJOLb8N4lat4q5~31RomchuWqE3oPiZmszcAjnytEoY45ukX5cVcpznQGaeqW-MrBB~vy-tsqpfxX3Xy-T6wk3aW5hm8cG5kIPUtdQ9MMcCacIYQwxZS3HF4mLeZ59rTv4Dm3Ej5nIe7PNx2tZexgTomkHvmX3YLJFGzcv5hxdqPKDA2W8kOt3So9YjFJ~QnWHl~IVeY39xhFn7~sCSUAwXtQjh1ApJiCjPj8ai9-wuNgl6HwYoUph9ObMuOlRhZ9rcT6Bt8OjIKX8QMzHnVYAt8~6T0~PyvYSLEkcsazbHhXTr0kA56QpalFAw9FxeQ' alt='admin' className='admin-img' />
            </div>

                <CiSettings  className='icons' size={24}/>

            <div  className='signout'>
                <PiSignOutDuotone className='icons' size={24} />
                <button>LogOut</button>
            </div>
            </div>
        </div>

        
    </div>
  )
}

export default Home