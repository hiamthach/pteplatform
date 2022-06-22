import React from 'react';
import Banner from "../../component/Banner";
import CustomTitle from "../../component/CustomTitle";
import { Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import home1 from '../../asset/img/home.png'

import './styles.scss'
const { Panel } = Collapse;

const HomePage = () => {
    return (
        <div className="home">
            <Banner/>
            <div className="home-container">
                <section className="home__section home__section-1">
                    <CustomTitle num="one" title="PTE AI Practice Platform"/>
                    <div className="home__section-1--container">
                        <div className="home__section-1--col-6">
                            <img src={home1} alt="" />
                        </div>
                        <div className="home__section-1--col-6">
                            <h1>Speaking & Writing AI Scorings</h1>
                            <div className="divider"></div>
                            <ul>
                                <li>Simulate Pearson PTE scoring engines</li>
                                <li>Evaluate speaking pronunciation & fluency</li>
                                <li>Check writing grammar and spelling</li>
                                <li>Synchronize practice records across Web & APPs</li>
                            </ul>
                            <button>Practise Now</button>
                        </div>
                    </div>
                </section>

                <section className="home__section home__section-2">
                    <CustomTitle num="two" title="PTE Study Tools"/>
                    <div className="home__section-2-wrapper">
                        <div className="home__section-2-card">
                            <svg width="72" height="72"><g fill-rule="nonzero" fill="none"><circle fill="#FFF2F4" cx="36" cy="36" r="36"></circle><g opacity="0.9"><path d="M23.887 15.974h24.667a5.666 5.666 0 015.666 5.666v26.666a5.666 5.666 0 01-5.666 5.666H23.887a5.666 5.666 0 01-5.666-5.666V21.64a5.666 5.666 0 015.665-5.666h.001z" fill="#F98F93"></path><path d="M23.018 53.97a4.8 4.8 0 010-9.601h26.397c.116 0 .23 0 .343.013h.209a4.258 4.258 0 004.25-4.243v1.834c0 1.379-.593 2.69-1.629 3.6a4.801 4.801 0 01-3.173 8.4l-26.397-.004z" fill="#E16364"></path><path d="M51.62 51.97H23.536a2.602 2.602 0 01-2.6-2.599 2.602 2.602 0 012.6-2.6H49.42a4.779 4.779 0 004.796-4.642v7.042h-.008c.007.067.007.144.007.2a2.604 2.604 0 01-2.595 2.599z" fill="#C64243"></path><path d="M50.219 50.773H23.14a2.003 2.003 0 01-2.003-2 2.002 2.002 0 012.003-1.999h26.28a4.757 4.757 0 002.8-.9v2.9a2 2 0 01-2.001 1.999z" fill="#FFF"></path><path fill="#E77071" d="M23.621 15.974h1.601v28.44h-1.601z"></path><path d="M25.416 55.47a1.077 1.077 0 01-.15-.557v-8.145h8.601v8.149a1.1 1.1 0 01-1.65.952l-2.648-1.528-2.651 1.53a1.105 1.105 0 01-1.502-.4z" fill="#FFC411"></path><path d="M27.07 47.571a.8.8 0 01.8.8v2.998a.8.8 0 01-.8.8.8.8 0 01-.8-.8v-2.998a.8.8 0 01.8-.8z" fill="#FFF"></path><path d="M28.569 34.521l3.278-.412c.04.362.194.702.439.972.204.188.474.29.752.283a1.37 1.37 0 001.24-.8c.301-.8.465-1.646.484-2.5-.346.37-.757.672-1.214.891a3.464 3.464 0 01-1.44.283 3.6 3.6 0 01-2.69-1.132 3.965 3.965 0 01-1.098-2.866 4.25 4.25 0 01.558-2.155 3.666 3.666 0 011.543-1.471 5.412 5.412 0 012.462-.499 5.766 5.766 0 012.859.612 4.287 4.287 0 011.722 1.945 8.163 8.163 0 01.643 3.518 6.87 6.87 0 01-1.351 4.708 4.806 4.806 0 01-3.747 1.492 6.159 6.159 0 01-2.233-.33 3.461 3.461 0 01-1.361-.957 4.425 4.425 0 01-.846-1.582zm6.073-5.297a2.2 2.2 0 00-.486-1.51 1.524 1.524 0 00-1.181-.546 1.4 1.4 0 00-1.09.494 2.197 2.197 0 00-.425 1.483c-.037.542.122 1.08.448 1.514.273.339.687.533 1.122.526.443.008.867-.18 1.157-.514.331-.409.494-.929.455-1.453v.006zM39.486 31.197a7.107 7.107 0 011.218-4.736 4.757 4.757 0 013.719-1.351 5.529 5.529 0 011.967.296c.467.168.894.43 1.256.771.305.292.562.63.764 1 .2.386.351.796.45 1.22.223.905.334 1.836.331 2.769a8.092 8.092 0 01-1.094 4.727 4.362 4.362 0 01-3.763 1.498 5.271 5.271 0 01-2.422-.477 3.919 3.919 0 01-1.515-1.399 5.271 5.271 0 01-.671-1.8 12.37 12.37 0 01-.243-2.512l.003-.006zm3.27 0a8.073 8.073 0 00.402 3.098c.176.49.636.82 1.157.83.325.005.64-.122.871-.35.285-.311.473-.698.543-1.114a11.66 11.66 0 00.175-2.37 8.303 8.303 0 00-.403-3.178 1.274 1.274 0 00-1.2-.815 1.225 1.225 0 00-1.18.83 8.756 8.756 0 00-.366 3.08v-.011z" fill="#E06364"></path><path d="M28.569 32.45l3.278-.413c.04.362.194.702.439.972.204.189.474.29.752.283a1.368 1.368 0 001.238-.8c.302-.8.466-1.645.485-2.5-.346.37-.758.673-1.214.892a3.462 3.462 0 01-1.44.283 3.6 3.6 0 01-2.691-1.133 3.965 3.965 0 01-1.097-2.866 4.25 4.25 0 01.558-2.154 3.666 3.666 0 011.543-1.471 5.412 5.412 0 012.462-.5 5.768 5.768 0 012.858.613 4.287 4.287 0 011.723 1.944 8.163 8.163 0 01.643 3.518 6.87 6.87 0 01-1.351 4.708 4.806 4.806 0 01-3.748 1.494 6.16 6.16 0 01-2.233-.33 3.46 3.46 0 01-1.362-.957 4.422 4.422 0 01-.843-1.583zm6.073-5.297a2.2 2.2 0 00-.486-1.51 1.524 1.524 0 00-1.181-.546 1.399 1.399 0 00-1.09.494 2.197 2.197 0 00-.425 1.482c-.037.542.122 1.08.448 1.515.273.338.687.532 1.122.526.443.008.867-.18 1.157-.515.331-.408.494-.928.455-1.452v.006zM39.486 29.127a7.107 7.107 0 011.218-4.736 4.757 4.757 0 013.719-1.351 5.529 5.529 0 011.967.296c.467.168.894.43 1.256.771.305.292.562.63.764 1 .2.386.351.796.45 1.22.223.905.334 1.836.331 2.769a8.092 8.092 0 01-1.094 4.729 4.362 4.362 0 01-3.763 1.497 5.271 5.271 0 01-2.422-.477 3.919 3.919 0 01-1.515-1.398 5.271 5.271 0 01-.671-1.8 12.343 12.343 0 01-.243-2.511l.003-.01zm3.27 0a8.073 8.073 0 00.402 3.098c.176.49.636.82 1.157.83.325.005.64-.122.871-.35.285-.311.473-.698.543-1.114a11.66 11.66 0 00.175-2.37 8.303 8.303 0 00-.403-3.178 1.274 1.274 0 00-1.2-.815 1.225 1.225 0 00-1.18.83 8.756 8.756 0 00-.366 3.08v-.011z" fill="#FFF"></path></g></g></svg>
                            <div className="home__section-2-card--in4">
                                <h1>Vocab Book</h1>
                                <p>Contains 90% exam vocabs</p>
                            </div>
                        </div>
                        <div className="home__section-2-card">
                            <svg width="72" height="72"><g fill="none" fill-rule="evenodd"><circle fill="#EDFDF8" fill-rule="nonzero" cx="36" cy="36" r="36"></circle><g fill-rule="nonzero"><path d="M21.612 16.714h24.667a5.709 5.709 0 015.667 5.751v27.07a5.71 5.71 0 01-5.667 5.75H21.612a5.709 5.709 0 01-5.667-5.75v-27.07a5.71 5.71 0 015.665-5.75h.002z" opacity="0.5" fill="#4EDAD6"></path><rect width="30.857" height="33.429" rx="3" opacity="0.95" transform="translate(18.517 19.287)" fill="#FFF"></rect></g><path d="M23.13 37.02h.153c.944-.065 1.785-.87 2.5-2.398a22.267 22.267 0 001.432-4.685 44.73 44.73 0 011.078-4.349c.597-1.836 1.116-2.423 1.448-2.593.15-.077.392-.144.782.147.505.376 1.293 1.414 2.178 4.22a46.31 46.31 0 011.144 4.565c.027.162.064.323.11.48a.543.543 0 00.744.404.79.79 0 00.321-.933l-.064-.309a48.537 48.537 0 00-1.19-4.739c-.805-2.552-1.7-4.21-2.658-4.924a1.614 1.614 0 00-1.8-.242c-1.711.876-2.572 4.939-3.199 7.902-1.088 5.135-2.274 5.97-2.886 6.011a1.597 1.597 0 01-1.339-.643 5.643 5.643 0 01-.98-3.523.658.658 0 00-.57-.725.658.658 0 00-.575.725 7.14 7.14 0 001.338 4.565 2.672 2.672 0 002.033 1.044" fill="#CFD7E1" fill-rule="nonzero" opacity="0.7"></path><g fill-rule="nonzero"><path d="M45.708 46.91a6.825 6.825 0 01-6.818-6.818V29.963a6.825 6.825 0 016.818-6.818 6.825 6.825 0 016.817 6.818v10.13a6.825 6.825 0 01-6.817 6.817z" fill="#4CDAD6"></path><path d="M45.708 45.624a5.538 5.538 0 005.531-5.532V29.963a5.538 5.538 0 00-5.531-5.532 5.538 5.538 0 00-5.532 5.532v10.13a5.538 5.538 0 005.532 5.531m0 2.571a8.103 8.103 0 01-8.103-8.103V29.963a8.103 8.103 0 1116.205 0v10.13a8.103 8.103 0 01-8.102 8.102z" fill="#4ADAD6"></path></g><g stroke-linecap="round" stroke="#2CC3BE" stroke-width="2"><path d="M53.954 30.736h-9.403M53.954 34.914h-9.403M53.954 39.093h-9.403"></path></g><g transform="translate(32.143 33.805)"><g transform="translate(6.857 19.454)"><rect fill="#CDD6E0" fill-rule="nonzero" width="14.18" height="2.026" rx="0.788"></rect><rect stroke="#CFD7E1" x="0.643" y="0.643" width="12.894" height="1.286" rx="0.288"></rect></g><path fill="#CFD6E0" fill-rule="nonzero" d="M11.035 16.416h6.078v3.038h-6.078z"></path><path d="M13.44 18.441C6.732 18.433 1.295 12.997 1.287 6.287c0-.508.031-1.015.094-1.52h1.928v.885h.02a10.13 10.13 0 1020.22 0h.02v-.885h1.928c.062.505.094 1.012.094 1.52-.009 6.707-5.442 12.143-12.15 12.154z" fill="#CFD7E1" fill-rule="nonzero"></path><path d="M25.596 6.287H23.57V2.236h2.025v4.05l.001.001zm-22.283 0H1.286V2.236h2.026v4.05l.001.001z" fill="#CFD7E1" fill-rule="nonzero"></path><circle fill="#CFD7E1" fill-rule="nonzero" cx="2.295" cy="2.295" r="1.286"></circle><circle fill="#CFD7E1" fill-rule="nonzero" cx="24.579" cy="2.295" r="1.286"></circle></g></g></svg>
                            <div className="home__section-2-card--in4">
                                <h1>Shadowing</h1>
                                <p>Improve RA in 14 days</p>
                            </div>
                        </div>
                        <div className="home__section-2-card">
                            <svg width="72" height="72"><g fill="none" fill-rule="evenodd"><circle fill="#F0FAFD" fill-rule="nonzero" cx="36" cy="36" r="36"></circle><path d="M22.38 16.714h24.668a5.709 5.709 0 015.667 5.751v27.07a5.71 5.71 0 01-5.667 5.75H22.38a5.709 5.709 0 01-5.666-5.75v-27.07a5.71 5.71 0 015.665-5.75h.001z" opacity="0.9" fill="#57D6F8" fill-rule="nonzero"></path><g transform="translate(19.158 19.162)" fill-rule="nonzero"><rect fill="#FFF" x="20.406" y="22.731" width="9.055" height="1.286" rx="0.354"></rect><rect fill="#FFF" opacity="0.98" x="0.126" y="0.123" width="30.857" height="33.429" rx="3"></rect><rect fill="#65D2F0" x="21.671" y="3.416" width="7.019" height="8.212" rx="1"></rect><rect fill="#67D2F0" opacity="0.95" x="2.814" y="3.416" width="16.079" height="3.303" rx="1"></rect><rect fill="#B3E8F7" opacity="0.95" x="2.814" y="9.085" width="12.684" height="2.415" rx="0.939"></rect><rect fill="#F5F6F7" opacity="0.95" x="2.813" y="19.781" width="15.101" height="2.415" rx="0.939"></rect><rect fill="#F5F6F7" opacity="0.95" x="2.813" y="25.03" width="11.479" height="2.415" rx="0.939"></rect><rect fill="#F5F6F7" opacity="0.95" x="2.813" y="14.638" width="17.672" height="2.415" rx="0.939"></rect></g><path d="M43.457 36.97a2.571 2.571 0 014.372 0l8.889 14.393a2.571 2.571 0 01-2.186 3.923H36.753a2.571 2.571 0 01-2.185-3.923l8.89-14.392z" fill="#FFCA27" fill-rule="nonzero"></path><text transform="translate(42.429 36)" fill="#FFF" font-family="ArialRoundedMTBold, Arial Rounded MT Bold" font-size="14"><tspan x="0" y="15.286">!</tspan></text></g></svg>
                            <div className="home__section-2-card--in4">
                                <h1>AI Analysis</h1>
                                <p>Accurate score report analysis</p>
                            </div>
                        </div>
                        <div className="home__section-2-card">
                            <svg width="72" height="72"><g fill="none" fill-rule="evenodd"><circle fill="#F4F5FE" fill-rule="nonzero" cx="36" cy="36" r="36"></circle><path stroke="#6D7FE9" stroke-width="4" stroke-linecap="round" d="M36 24v24M48.001 36h-24"></path></g></svg>
                            <div className="home__section-2-card--in4">
                                <h1>View More</h1>
                                <p>View more study tools</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="home__section home__section-3">
                    <CustomTitle num="three" title="Download PTE Study Materials"/>
                    <div className="home__section-3-wrapper">
                        <div className="home__section-3-card">
                            <h1>Speaking Templates</h1>
                            <div className="divider"></div>
                            <ul>
                                <li>Describe Image Templates</li>
                                <li>Re-tell Lecture Template</li>
                            </ul>
                            <button>Download</button>
                        </div>
                        <div className="home__section-3-card">
                            <h1>Study Materials</h1>
                            <div className="divider"></div>
                            <ul>
                                <li>The most useful PTE study materials</li>
                            </ul>
                            <button>Download</button>
                        </div>
                        <div className="home__section-3-card">
                            <h1>Writing Templates</h1>
                            <div className="divider"></div>
                            <ul>
                                <li>Write Essay Template</li>
                                <li>Summarize Written Text Template</li>
                                <li>Summarize Spoken Text Template</li>
                            </ul>
                            <button>Download</button>
                        </div>
                    </div>
                </section>

                <section className="home__section home__section-4">
                    <CustomTitle num="four" title="PTE Knowledge"/>
                    <div className="home__section-4--wrapper">
                        <div className="home__section-4--col">
                            <div className="home__section-4--card">
                                <h2>PTE Academic Guide</h2>
                                <Collapse bordered={false} defaultActiveKey={['1']} style={{backgroundColor: "transparent"}}>
                                    <Panel header="What is the meaning of PTE?" key="1" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="2" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="3" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="4" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                </Collapse>
                            </div>
                            <div className="home__section-4--card">
                                <h2>PTE Academic Guide</h2>
                                <Collapse bordered={false} defaultActiveKey={['1']} style={{backgroundColor: "transparent"}}>
                                    <Panel header="What is the meaning of PTE?" key="1" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="2" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="3" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="4" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                </Collapse>
                            </div>
                            <div className="home__section-4--card">
                                <h2>PTE Academic Guide</h2>
                                <Collapse bordered={false} defaultActiveKey={['1']} style={{backgroundColor: "transparent"}}>
                                    <Panel header="What is the meaning of PTE?" key="1" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="2" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="3" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="4" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                        <div className="home__section-4--col">
                            <div className="home__section-4--card">
                                <h2>PTE Academic Guide</h2>
                                <Collapse bordered={false} defaultActiveKey={['1']} style={{backgroundColor: "transparent"}}>
                                    <Panel header="What is the meaning of PTE?" key="1" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="2" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>

                                    <Panel header="What is the meaning of PTE?" key="3" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="4" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                </Collapse>
                            </div>
                            <div className="home__section-4--card">
                                <h2>PTE Academic Guide</h2>
                                <Collapse bordered={false} defaultActiveKey={['1']} style={{backgroundColor: "transparent"}}>
                                    <Panel header="What is the meaning of PTE?" key="1" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="2" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="3" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                    <Panel header="What is the meaning of PTE?" key="4" className="home__section-4--card__panel">
                                        <p>
                                            The full form of PTE is the Pearson Test of English, normally referring to the academic version. It is also known as PTE-A, Pearson Academic, or Pearson Test of English Academic. PTE is a computer-based exam.
                                        </p>

                                        <a href="/">View more <RightOutlined /></a>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default HomePage;
