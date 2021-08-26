import React, {Component} from 'react';

class Pagination extends Component {
    render() {
        return (
            <div className="paging">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <svg xmlns="http://www.w3.org/2000/svg" width="5.871"
                                     height="10.121" viewBox="0 0 5.871 10.121">
                                    <path id="Path_21855" data-name="Path 21855"
                                          d="M1013.619,9197.351l4.061-4-4.061-4"
                                          transform="translate(-1012.558 -9188.29)"
                                          fill="none" stroke="#bebebe"
                                          stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5"/>
                                </svg>
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">4</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">5</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">6</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">7</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="5.871"
                                     height="10.121" viewBox="0 0 5.871 10.121">
                                    <path id="Path_22987" data-name="Path 22987"
                                          d="M1017.68,9197.351l-4.061-4,4.061-4"
                                          transform="translate(-1012.869 -9188.29)"
                                          fill="none" stroke="#323232"
                                          stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="1.5"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Pagination;