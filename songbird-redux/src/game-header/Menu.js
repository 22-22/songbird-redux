import React from 'react';
// import { MenuItem } from './MenuItem';
import '../index.scss';
import { connect } from 'react-redux';

const menuItemNames = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

const Menu = (props) => (
    <div className="btn-group" role="toolbar">
        {
            menuItemNames.map((name, idx) =>
                <button
                    type="button" key={idx}
                    className={props.gameRound === idx && !props.isFinished
                        ? "btn header__btn header__btn-active"
                        : "btn header__btn"}>
                    {name}
                </button>
            )
        }
    </div>
)

const mapStateToProps = (state) => {
    return state;
}

export default connect (mapStateToProps, null)(Menu);


