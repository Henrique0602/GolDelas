const Proximo = () => {
    return (
        <section className="p-4">
            <h2 className="text-yellow-400 text-lg font-bold mb-6">PRÓXIMOS JOGOS</h2>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-around gap-6 text-center items-stretch">

             
                <div className="bg-black rounded-lg p-6 shadow-lg border-b border-yellow-700 lg:w-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 items-center gap-4">
                        <div className="text-yellow-400 text-sm text-center sm:text-left">
                            <div className="font-semibold">23/10/2025</div>
                            <div className="font-semibold">21:30</div>
                        </div>
                        <div className="flex items-center justify-center space-x-4 col-span-2">
                            <div className="flex items-center space-x-2">
                                <img src="/SP.png" alt="São Paulo" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
                                <span className="text-white text-base md:text-lg font-bold">SAO</span>
                            </div>
                            <span className="text-white text-lg md:text-xl font-bold mx-2">X</span>
                            <div className="flex items-center space-x-2">
                                <span className="text-white text-base md:text-lg font-bold">PAL</span>
                                <img src="/Palmeiras.png" alt="Palmeiras" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
                            </div>
                        </div>
                        <div className="flex justify-center sm:justify-end">
                            <span className="text-yellow-400 text-sm font-semibold text-center sm:text-right">
                                Copa do Brasil
                            </span>
                        </div>
                    </div>
                </div>

             
                <div className="bg-black rounded-lg p-6 shadow-lg border-b border-yellow-700 lg:w-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 items-center gap-4">
                        <div className="text-yellow-400 text-sm text-center sm:text-left">
                            <div className="font-semibold">01/08/2025</div>
                            <div className="font-semibold">16:00</div>
                        </div>
                        <div className="flex items-center justify-center space-x-4 col-span-2">
                            <div className="flex items-center space-x-2">
                                <img src="/Corinthians.png" alt="Corinthians" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
                                <span className="text-white text-base md:text-lg font-bold">COR</span>
                            </div>
                            <span className="text-white text-lg md:text-xl font-bold mx-2">X</span>
                            <div className="flex items-center space-x-2">
                                <span className="text-white text-base md:text-lg font-bold">VIT</span>
                                <img src="/Vitoria.png" alt="Vitória" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
                            </div>
                        </div>
                        <div className="flex justify-center sm:justify-end">
                            <div className="text-yellow-400 text-sm font-semibold text-center sm:text-right">
                                <div>Campeonato</div>
                                <div>Brasileiro</div>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div className="bg-black rounded-lg p-6 shadow-lg border-b border-yellow-700 lg:w-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 items-center gap-4">
                        <div className="text-yellow-400 text-sm text-center sm:text-left">
                            <div className="font-semibold">19/01/2025</div>
                            <div className="font-semibold">18:00</div>
                        </div>
                        <div className="flex items-center justify-center space-x-4 col-span-2">
                            <div className="flex items-center space-x-2">
                                <img src="/Flamengo.png" alt="Flamengo" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
                                <span className="text-white text-base md:text-lg font-bold">FLA</span>
                            </div>
                            <span className="text-white text-lg md:text-xl font-bold mx-2">X</span>
                            <div className="flex items-center space-x-2">
                                <span className="text-white text-base md:text-lg font-bold">BOT</span>
                                <img src="/Bota.png" alt="Botafogo" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
                            </div>
                        </div>
                        <div className="flex justify-center sm:justify-end">
                            <div className="text-yellow-400 text-sm font-semibold text-center sm:text-right">
                                <div>Campeonato</div>
                                <div>Carioca</div>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div className="bg-black rounded-lg p-6 shadow-lg border-b border-yellow-700 lg:w-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 items-center gap-4">
                        <div className="text-yellow-400 text-sm text-center sm:text-left">
                            <div className="font-semibold">31/02/2025</div>
                            <div className="font-semibold">19:45</div>
                        </div>
                        <div className="flex items-center justify-center space-x-4 col-span-2">
                            <div className="flex items-center space-x-2">
                                <img src="/Bahia.png" alt="Bahia" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
                                <span className="text-white text-base md:text-lg font-bold">BAH</span>
                            </div>
                            <span className="text-white text-lg md:text-xl font-bold mx-2">X</span>
                            <div className="flex items-center space-x-2">
                                <span className="text-white text-base md:text-lg font-bold">FOR</span>
                                <img src="/Fortaleza.png" alt="Fortaleza" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
                            </div>
                        </div>
                        <div className="flex justify-center sm:justify-end">
                            <div className="text-yellow-400 text-sm font-semibold text-center sm:text-right">
                                <div>Campeonato</div>
                                <div>Brasileiro</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Proximo;