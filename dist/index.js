'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _finder = require('./finder');

var _AddressTypeahead = require('./AddressTypeahead.component');

var _AddressTypeahead2 = _interopRequireDefault(_AddressTypeahead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddressForm = function (_React$Component) {
  _inherits(AddressForm, _React$Component);

  function AddressForm(props) {
    _classCallCheck(this, AddressForm);
    var _this = _possibleConstructorReturn(this, (AddressForm.__proto__ || Object.getPrototypeOf(AddressForm)).call(this, props));
    
    _this.setAddressObj = _this.setAddressObj.bind(_this);
    _this.setAddressState = _this.setAddressState.bind(_this);

    _this.state = {   
      addressObj: {                           
        d: '',                                //Add ล่าสุด
        a: '',                                //Add ล่าสุด
        p: '',                                //Add ล่าสุด
        z: '',                                //Add ล่าสุด
      },                                                             //  Add
      defaultAddressObj: {                                          //  Add
        d : this.props.d?this.props.d:'',                           //  Add
        a : this.props.a?this.props.a:'',                           //  Add
        p : this.props.p?this.props.p:'',                           //  Add
        z : this.props.z?this.props.z:'',                           //  Add
      }                                                             //  Add
    };

    return _this;
  }
  
  _createClass(AddressForm, [{
    key: 'setAddressObj',
    value: function setAddressObj(addressObj) {
      this.setState({ addressObj: addressObj });
    },
  },
  {                                           //Add ล่าสุด
    key: 'setAddressState',                   //Add ล่าสุด
    value: function setAddressState(obj) {    //Add ล่าสุด
      let fields = this.state.addressObj;     //Add ล่าสุด
      fields[obj.fieldType] = obj.value;      //Add ล่าสุด
      this.setState({ fields });              //Add ล่าสุด
    },                                        //Add ล่าสุด
  },                                          //Add ล่าสุด
  {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ 
        defaultAddressObj: {                                        //  Add
          d : nextProps.d?nextProps.d:'',                           //  Add
          a : nextProps.a?nextProps.a:'',                           //  Add
          p : nextProps.p?nextProps.p:'',                           //  Add
          z : nextProps.z?nextProps.z:'',                           //  Add
        }           
      });
    }
  },
  {
    key: 'onClearDefaultValue',
    value: function onClearDefaultValue() {
      this.setState({ defaultAddressObj: undefined });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var addressObj = this.state.addressObj;
      var defaultAddressObj = this.state.defaultAddressObj;

      return _react2.default.createElement(
        'div',
        null,
        Object.keys(_finder.fieldsEnum).map(function (key) {
          var name = void 0;
          switch (_finder.fieldsEnum[key]) {
            case 'd':
              name = 'แขวง/ตําบล';break;
            case 'a':
              name = 'เขต/อำเภอ';break;
            case 'p':
              name = 'จังหวัด';break;
            case 'z':
              name = 'รหัสไปรษณีย์';break;
            default:
              name = '';break;
          }
          return _react2.default.createElement(
            'div',
            { key: key, className: 'typeahead-address-container' },
            _react2.default.createElement(
              'label',
              { className: 'typeahead-address-label text-danger', htmlFor: 'district' },
              name + ' *'
            ),
            _react2.default.createElement(_AddressTypeahead2.default, {
              renderResult: _this2.props.renderResult,
              onOptionSelected: function onOptionSelected(result) {
                _this2.setAddressObj(result);
                _this2.props.onAddressSelected(result);
              },
              setAddressState: function setAddressState(value){     //Add ล่าสุด
                _this2.setAddressState(value)                       //Add ล่าสุด
                _this2.props.onAddressSelected(addressObj);         //Add ล่าสุด
              },                                                    //Add ล่าสุด
              value:  addressObj?addressObj[_finder.fieldsEnum[key]]:'',
              defaultValue: defaultAddressObj?defaultAddressObj[_finder.fieldsEnum[key]]:'',
              onClearDefaultValue: function(){
                return _this2.onClearDefaultValue();
              },
              fieldType: _finder.fieldsEnum[key]
            }),
          );
        })
      );
    }
  }]);

  return AddressForm;
}(_react2.default.Component);

exports.default = AddressForm;