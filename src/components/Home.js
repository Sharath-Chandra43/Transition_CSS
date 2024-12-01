import React from 'react'
import { CiImageOn, CiSearch, CiSettings } from 'react-icons/ci'
import { FaCheckSquare, FaLink, FaRegComments, FaRegEnvelopeOpen, FaUserPlus } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import { IoAddCircleOutline, IoHomeOutline } from 'react-icons/io5'
import { LuMapPin } from 'react-icons/lu'
import { PiSignOutDuotone } from 'react-icons/pi'
import ChatMessage from './ChatMessage'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import { IoIosAddCircle } from 'react-icons/io'
import { TiPinOutline } from 'react-icons/ti'

const Home = () => {
  return (
    <>
    <div >
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

            <div className='chat-and-conversation-container'>
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
                <button className='widget-button '>  Add New Widget</button>
            </div>
        </div>

        <div className='conversation-container'>
            <div className='conversation-top'>
                <div className='conversation-top-card blue'>
                    <h2>Conversations</h2>
                </div>
                <div className='conversation-top-card gray'>
                    <h2>Address Update</h2>
                </div>
                <div className='conversation-top-card gray'>
                    <h2>Fee Reversal</h2>
                </div> <div className='conversation-top-card gray'>
                    <h2>Retail</h2>
                </div>
                <div className='conversation-top-card'>
                <button className='escalate-button'>
                    Escalate
                </button>
                </div>
            </div>

            <div className='converstations'>
                <div className='conversation-attackments'>
                    <div className='blue'>
                      <h2>Conversations</h2>
                    </div>
                    <div className='attachments'>
                      <h2>Attachments</h2>
                    </div>
                    </div>
                    <div className='chatmessages-container'>
                    <ChatMessage
                        sender="CB"
                        senderName="Rachel Adams"
                        timestamp="9:08 PM"
                        deliveryMethod="Received By WhatsApp"
                        message="Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu."
                    />
                    
                    <ChatMessage
                            sender="HK"
                            recipient="You"
                            timestamp="27Jul, 2024 9:08 PM"
                            deliveryMethod="Sent By WhatsApp"
                            message="Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu."
                        />


                    <div className='social-icon-contaniner'>
                        <div className='icon-container'>
                            <div className='icon'>
                                <span className='text'><FaCheckSquare size={24}  className='icons'/>SMS</span>
                            </div>
                            <div className='icon'>
                                <span className='gray'><MdCheckBoxOutlineBlank  size={24}/>Whatsapp</span>
                            </div>
                            <div className='icon'>
                                <span className='text'><FaCheckSquare size={24}  className='icons'/>Email</span>
                            </div>
                        </div>

                        <div className="input-container">
                            <input type="text" placeholder="Type a Message....." />
                            <FaLink size={24} className='link'/>
                            <button className='send-button'><BsFillArrowRightSquareFill /> Send</button>
                         </div>
                    </div>
                
                </div>

                
            </div>
        </div>


    <div className='right-side-container'>
                    <div className='first-card'> 
                            <h2>Ask Catura</h2>
                                <span>
                                    <FaRegEnvelopeOpen /> WhatsApp
                                </span>
                                <span>
                                    <FaRegEnvelopeOpen /> Greeting
                                </span>
                    </div>
                    <div className='main-card'>
                        <div className="text-card">
                        <div className="front">
                            <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam. Placerat maecenas quis ut elementum praesent imperdiet. Egestas mattis pellentesque nibh dui sed malesuada dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu. Scelerisque dui habitant ullamcorper dictum. Feugiat</p>
                        </div>
                        <div className="back">
                            <div className="blurred-text">
                            {/* Blured text here */}
                            </div>
                            <div className="greeting-section">
                            <p>Greeting Template</p>
                            </div>
                            <div className="button-container">
                            <button>Copy to Send</button>
                            <button>Preview</button>
                            </div>
                        </div>
                        </div>
                        
                        <div className="input-container">
                            <input type="text" placeholder="Type a Message....." />
                            <button className='send-button'><BsFillArrowRightSquareFill size={24}/> </button>
                         </div>
                         
                    </div>
                    <div className='second-card'>
                        <h1>Auction Launcher</h1>

                        <div className='search-input'>
                            <CiSearch size={24}/>
                            <input type='text' placeholder='Search actions....' className='search'/>
                        </div>
                        <div className='third-card'>
                            <div>
                                <button className='button blue-button'><IoIosAddCircle /> Add button</button>
                                <button  className='button'> Fee Reversal</button>
                            
                            <button  className='button'> Retail Onboarding</button>
                                <button  className='button'> Address Update</button>
                            </div>
                        </div>
                    </div>

                    <div className='last-card'>
                        <div className='case-fav'>
                            <TiPinOutline size={24} className='blue' />
                           <h2> Case Favorite </h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt </p>
                        <div className='photo-card'>
                            <CiImageOn size={24}/>
                            <p>Photo</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt </p>
                    </div>
                </div>
            </div>
        </div>
</>
  )
}

export default Home