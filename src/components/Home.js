import React from 'react'
import { CiSettings } from 'react-icons/ci'
import { FaRegComments, FaUserPlus } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import { IoAddCircleOutline, IoHomeOutline } from 'react-icons/io5'
import { LuMapPin } from 'react-icons/lu'
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

         <div className='chats-container'>
            <div className='chatters-card'>
                <div className='ellipse'>
                    <p>CB</p>
                </div>
                <h2 className='chater-name'>Cheyenne Bergson</h2>
            </div>

            <div className='chatters-card'>
                <div className='ellipse'>
                    <p>CB</p>
                </div>
                <h2 className='chater-name'>Cheyenne Bergson</h2>
            </div>
            <div className='chatters-card'>
                <div className='ellipse'>
                    <p>CB</p>
                </div>
                <h2 className='chater-name'>Cheyenne Bergson</h2>
            </div>
            <div className='chatters-card'>
                <div className='ellipse'>
                    <p>CB</p>
                </div>
                <h2 className='chater-name'>Cheyenne Bergson</h2>
            </div>
            <div className='chatters-card'>
                <div className='ellipse'>
                    <p>CB</p>
                </div>
                <h2 className='chater-name'>Cheyenne Bergson</h2>
            </div>
           <div className='message'>
                <FaRegComments />
                <h1>Messaging</h1>
           </div>
         </div>

         <div className='single-chat-container'>
         <div class="card-container">
            <div class="card">
                <div class="cb-text">CB</div>
                <div class="chater-details">
                <p>Hannibal Smith</p>
                <div className='location'>
                <LuMapPin />
                <p>1 Market Street San Francisco, CA 94105</p>
                </div>
                </div>
            </div>
        </div>

     <div className='customer-container'>
        <div class="customer-card">
                <span class="customer-id">Customer ID:</span>
           <div>
                <span class="id-value">12345</span>
                <HiDotsVertical size={14}/>
            </div>
        </div>

        <div class="customer-card">
                <span class="customer-id">Email Address:</span>
           <div>
                <span class="id-value">rachel@sample.com</span>
                <HiDotsVertical size={14}/>
            </div>
        </div>

        <div class="customer-card">
                <span class="customer-id">Phone Number:</span>
           <div>
                <span class="id-value">12345</span>
                <HiDotsVertical size={14}/>
            </div>
        </div>

        <div className='add-button'>
            <span className='add-span'>
                <IoAddCircleOutline size={30}/> 
                 Add
            </span>
        </div>
    
     </div> 

     <div className='customer-container'>
        <div class="customer-card">
                <span class="customer-id">Loyality Tier:</span>
           <div>
                <span class="id-value">Sliver</span>
                <HiDotsVertical size={14}/>
            </div>
        </div>

        <div class="customer-card">
                <span class="customer-id">Segment</span>
           <div>
                <span class="id-value">Sleeper Customer</span>
                <HiDotsVertical size={14}/>
            </div>
        </div>

        <div className='add-button'>
            <span className='add-span'>
                <IoAddCircleOutline size={30}/> 
                 Add
            </span>
        </div>

       
    
    </div> 

    <div className='customer-container'>
        <div class="customer-card">
                <span class="customer-id"> Lifetime Value:</span>
           <div>
                <span class="id-value">$ 1M</span>
                <HiDotsVertical size={14}/>
            </div>
        </div>

        <div class="customer-card">
                <span class="customer-id">Propensity to Purchase</span>
           <div>
                <span class="id-value special">75%</span>
                <HiDotsVertical size={14}/>
            </div>
        </div>

        <div className='add-button'>
            <span className='add-span'>
                <IoAddCircleOutline size={30}/> 
                 Add
            </span>
        </div>

       
    
    </div>
         
    <div className='customer-container'>
        <div class="customer-card">
                <span class="customer-id">Engagement Score:</span>
           <div>
                <span class="id-value score">80%</span>
                <HiDotsVertical size={14}/>
            </div>
        </div>

        <div className='add-button'>
            <span className='add-span'>
                <IoAddCircleOutline size={30}/> 
                 Add
            </span>
        </div>

       
    
    </div>

    <div className='bt-container'>
        <button className='agent-button'> <FaUserPlus />  Assign other Agent</button>
    </div>


    </div>
    </div>
  )
}

export default Home