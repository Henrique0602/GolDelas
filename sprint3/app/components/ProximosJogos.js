const Proximo = () => {
    return (
        <section className="p-4">
          
            <h2 className="text-yellow-400 text-lg font-bold mb-6 ">PRÓXIMOS JOGOS</h2>

      
            <div className="flex flex-wrap justify-around gap-6 text-center items-stretch">
           
                <div className="border border-yellow-400 rounded-lg p-6 bg-black shadow-lg flex flex-col items-center w-3xs">
                    <p className="text-yellow-400 text-sm mb-2 font-bold">Copa do Brasil</p>
                    <p className="text-white font-bold text-2 ">23/10/2025</p>
                    <p className="text-white font-bold text-2">21:30</p>
                    <div className="flex justify-between items-center w-full">
                       
                        <div className="flex items-center space-x-4">
                            <img
                                src="/SP.png"
                                alt="São Paulo"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">São Paulo</p>
                        </div>
                  
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">
                    
                        <div className="flex items-center space-x-4">
                            <img
                                src="/Palmeiras.png"
                                alt="Palmeiras"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Palmeiras</p>
                        </div>
                    
                    </div>
                   
                </div>

                <div className="border border-yellow-400 rounded-lg p-6 bg-black shadow-lg flex flex-col items-center w-3xs">
                    <p className="text-yellow-400 text-sm mb-2 font-bold">Campeonato Brasileiro</p>
                    <p className="text-white font-bold text-2 ">10/9/2025</p>
                    <p className="text-white font-bold text-2">18:30</p>
                    <div className="flex justify-between items-center w-full">
                    
                        <div className="flex items-center space-x-4">
                            <img
                                src="/Corinthians.png"
                                alt="Corinthians"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Corinthians</p>
                        </div>
                      
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">
               
                        <div className="flex items-center space-x-4">
                            <img
                                src="/Vitoria.png"
                                alt="Vitória"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Vitória</p>
                        </div>
                    </div>
                   
                </div>

       
                <div className="border border-yellow-400 rounded-lg p-6 bg-black shadow-lg flex flex-col items-center w-3xs">
                    <p className="text-yellow-400 text-sm mb-2 font-bold">Campeonato Carioca</p>
                    <p className="text-white font-bold text-2 ">23/10/2025</p>
                    <p className="text-white font-bold text-2">21:30</p>
                    <div className="flex justify-between items-center w-full">
            
                        <div className="flex items-center space-x-4">
                            <img
                                src="/Flamengo.png"
                                alt="Flamengo"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Flamengo</p>
                        </div>
                
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">
          
                        <div className="flex items-center space-x-4">
                            <img
                                src="/Bota.png"
                                alt="Botafogo"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Botafogo</p>
                        </div>
                  
                    </div>
                   
                </div>

      
                <div className="border border-yellow-400 rounded-lg p-6 bg-black shadow-lg flex flex-col items-center w-3xs">
                    <p className="text-yellow-400 text-sm mb-2 font-bold">Campeonato Brasileiro</p>
                    <p className="text-white font-bold text-2 ">30/10/2025</p>
                    <p className="text-white font-bold text-2">11:00</p>
                    <div className="flex justify-between items-center w-full">
             
                        <div className="flex items-center space-x-4">
                            <img
                                src="/Bahia.png"
                                alt="Bahia"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Bahia</p>
                        </div>
               
                    </div>
                    <div className="flex justify-between items-center w-full mt-4">
         
                        <div className="flex items-center space-x-4">
                            <img
                                src="/Fortaleza.png"
                                alt="Fortaleza"
                                className="h-12 w-12 object-contain"
                            />
                            <p className="text-white font-medium text-lg">Fortaleza</p>
                        </div>
                 
                    </div>
                   
                </div>
            </div>
        </section>
    );
};

export default Proximo;