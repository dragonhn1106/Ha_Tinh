var DatatableButtonsHtml5 = function () {


    //
    // Setup module components
    //

    // Basic Datatable examples
    var _componentDatatableButtonsHtml5 = function () {
        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }

        // Setting datatable defaults
        $.extend($.fn.dataTable.defaults, {
            autoWidth: false,
            "pageLength": 5,
            dom: '<"datatable-scroll-wrap"t><"datatable-footer d-flex justify-content-between align-content-center"lipfB>',
            language: {
                lengthMenu: '<span>Số kết quả trên 1 trang:</span> _MENU_',
                paginate: {
                    'first': 'First',
                    'last': 'Last',
                    'next': $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;',
                    'previous': $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;'
                }
            }
        });


        // Basic initialization
        $('.datatable-button-html5-basic').DataTable({
            "searching": false,
            buttons: {
                dom: {
                    button: {
                        className: 'btn btn-light'
                    }
                },
                buttons: [
                    // 'excelHtml5',
                    // {extend: 'xxxxx'},
                    {
                        extend: 'excelHtml5',
                        text: '<div class="d-flex"><p class="m-0"><i class="fas fa-download"></i></p>Tải xuống danh sách</div>',
                    },
                ]
            }
        });


    };

    return {
        init: function () {
            _componentDatatableButtonsHtml5();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function () {
    DatatableButtonsHtml5.init();
});