import React, { Component } from "react";
import { connect } from "react-redux";

import {logoutUser} from '../../actions';

class UserMenu extends Component {
  hadnleClick = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    this.props.logoutUser();
  };

  render() {
    return (
      <>
        {this.props.currentUser.email ? (
          <button onClick={this.hadnleClick}>Log Out</button>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.reducer.currentUser
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
/*
    1.Сделать еще один запрос для разлогина
    2.Привязать нажатие на кнопку и добавить поле с email
    3.Изменить редюсер что бы он состоял из двух файлов
    4.Сделать показ страницы с телефоноой книжкой только зарегистрированным пользователям(что бы был токен для запроса базы контактов)
*/
