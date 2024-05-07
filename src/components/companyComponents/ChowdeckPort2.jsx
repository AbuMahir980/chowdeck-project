import React from "react";
import chowFounder from "../../assets/chowdeck/Chowdeck Logistics _ Delivering happiness-14.svg";
import chowOwner from "../../assets/chowdeck/1698762681.jpg";
import combinator from '../../assets/chowdeck/yc.png'
import hoaq from '../../assets/chowdeck/hoaq.png'



const ChowdeckPort2 = () => {
  return (
    <div>
      <div className="px-16  ">
        <div className=" border-4 border-black rounded-t-lg bg-white ">
          <span>
            <div className="flex justify-around rtl border-black outline-none border-solid">
              <div className="border-black border-4 ">
                <p className="bg-[#0C513F] p-6 box-border rounded-lg-lg text-2xl text-white flex font-bold w-[500px]">
                  <span src={chowFounder}></span>Founder's Story
                </p>

                <img
                  src={chowOwner}
                  className="mt-14 mx-14 h-[500px] w-[400px] "
                />

                <div>
                  <h2 className="mx-32 mt-6 text-2xl font-normal">
                    Babafemi Aluko
                  </h2>
                  <p className="mx-28 text-green-950 font-semibold tracking-[0.2em]">
                    CEO / CO-FOUNDER
                  </p>
                </div>
              </div>

              {/* <span className="mt-32 h-[1900px] w-[2400px]"></span> */}

              <span className=" text-[18px] mt-3">
                <p>
                  I tested positive for COVID on the 31st of December, 2020. The
                  result came in very late at night and I couldn’t travel home.
                  I spent the entire January 1 looking for food vendors to
                  deliver food to me but the available food delivery providers
                  didn’t deliver during public holidays. I eventually found one
                  after so many hours and ended up paying 4x the regular amount.
                </p>
                <p>
                  During my 14- day isolation, I realised no one was really
                  looking into the logistics problem with the care and attention
                  I would have wished for. I started asking questions; most
                  answers ended with “dispatch riders are not reliable”, then I
                  made a lot of research and discovered delivery companies in
                  countries like India made millions of deliveries daily. No one
                  comes close locally and it didn’t make sense that at such a
                  small scale, we Africans couldn’t figure it out.
                </p>
                <p>
                  We initially approached the problem from a technical
                  standpoint then realised the problem was more operations than
                  tech and we needed to deconstruct operations before trying
                  again. We went back to first principles to figure this out. We
                  pulled funds from our pockets, got three bikes and riders -
                  gave two of them to Korede Spaghetti and one of them to
                  NiFries. We held meetings weekly with our riders and that gave
                  us so much insight we needed.
                </p>
                <p>
                  With a better understanding of what we believed the problem
                  was, we knew our solution had to be efficient and easy to use.
                  This was hard to pull as we struggled with iterations before
                  settling with one. It was a lot harder building the product as
                  we had to ensure equal dedication to all channels (riders,
                  restaurants and customers).
                </p>
                <p>
                  We pulled our tech force and built the first version of the
                  app in 3 weeks and launched public beta in October. Since
                  then, it’s been an interesting journey learning and building
                  for our customers.
                </p>
              </span>
            </div>
          </span>
        </div>
        <div className="border-black border-4 h-44 rounded-b-lg">
          <span className="font-bold mt-52">BACKED BY</span>
          <span className="flex grayscale mt-12 justify-center">
              <img src={combinator} style={{height: "43px", width: "150px"}}/>
              <img src={hoaq} style={{height: "53px", width: "150px"}}/>
          </span>
          </div>
      </div>
    </div>
  );
};

export default ChowdeckPort2;
